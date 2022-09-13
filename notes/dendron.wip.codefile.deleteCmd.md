---
id: qqv79sye4fs67kidfr5hr9b
title: deleteCmd
desc: ''
updated: 1662721055474
created: 1662721047003
---
import {
  DLink,
  DVault,
  EngineDeletePayload,
  normalizeUnixPath,
  NoteProps,
  NoteUtils,
  Position,
  ReducedDEngine,
  VaultUtils,
} from "@dendronhq/common-all";
import { RemarkUtils } from "@dendronhq/unified";
import _ from "lodash";
import _md from "markdown-it";
import { inject, injectable } from "tsyringe";
import {
  commands,
  TextEditor,
  Uri,
  ViewColumn,
  window,
  workspace,
} from "vscode";
import { URI, Utils } from "vscode-uri";
import { DENDRON_COMMANDS } from "../../constants";
import { isPathInWorkspace } from "../utils/isPathInWorkspace";

type CommandOpts = any;

type CommandOutput = EngineDeletePayload | void;
export type { CommandOutput as DeleteNodeCommandOutput };

// function formatDeletedMsg({
//   fsPath,
//   vault,
// }: {
//   fsPath: string;
//   vault: DVault;
// }) {
//   return `${Utils.basename(Uri.file(fsPath))} (${VaultUtils.getName(
//     vault
//   )}) deleted`;
// }

@injectable()
export class DeleteCmd {
  constructor(
    @inject("wsRoot") private wsRoot: URI,
    @inject("ReducedDEngine")
    private engine: ReducedDEngine,
    @inject("vaults") private vaults: DVault[]
  ) {}

  key = DENDRON_COMMANDS.DELETE.key;

  private async getBacklinkFrontmatterLineOffset(opts: { link: DLink }) {
    const { link } = opts;
    const vault = VaultUtils.getVaultByName({
      vaults: this.vaults,
      vname: link.from.vaultName as string,
    }) as DVault;
    const noteWithLink = (
      await this.engine.findNotes({ fname: link.from.fname, vault })
    )[0];
    const fsPath = NoteUtils.getFullPath({
      note: noteWithLink,
      wsRoot: this.wsRoot.fsPath,
    });
    console.log("fsPath******", fsPath);
    const fileContent = workspace.fs.readFile(Uri.file(fsPath)).toString();
    const nodePosition = RemarkUtils.getNodePositionPastFrontmatter(
      fileContent
    ) as Position;

    return nodePosition?.end.line;
  }
  /**
   * When Delete Command is ran from explorer menu, it gets Uri as args
   */
  private isUriArgs(opts: CommandOpts) {
    return !_.isEmpty(opts) && opts.fsPath;
  }

  private async deleteNote(params: {
    note: NoteProps;
    opts: CommandOpts;
    ctx: string;
  }) {
    const { note, opts } = params;
    const backlinks = note.links.filter((link) => link.type === "backlink");
    let title;
    if (backlinks.length === 0) {
      // no need to show preview a simple
      title = `Delete note ${note.fname}?`;
    } else {
      await this.showNoteDeletePreview(note, backlinks);
      title = `${note.fname} has backlinks. Delete note?`;
    }

    const shouldProceed = await this.promptConfirmation(title, opts?.noConfirm);
    if (!shouldProceed) {
      window.showInformationMessage("Cancelled");
      return;
    }

    // If Delete note preview is open, close it first
    if (backlinks.length !== 0) {
      await commands.executeCommand("workbench.action.closeActiveEditor");
    }

    const out = (await this.engine.deleteNote(note.id)) as EngineDeletePayload;
    if (out.error) {
      return;
    }
    // window.showInformationMessage(
    //   formatDeletedMsg({ fsPath: note.fname, vault: note.vault })
    // );
    await commands.executeCommand("workbench.action.closeActiveEditor");
    return out;
  }

  async showNoteDeletePreview(note: NoteProps, backlinks: DLink[]) {
    let content = [
      "# Delete Node Preview",
      "```",
      `node type: note`,
      "",
      `# of backlinks to this note: ${backlinks.length}`,
      "```",
      "## Broken links after deletion",
      `These links will be broken after deleting **${note.fname}**`,
      "",
      `Make sure to convert the broken links listed below accordingly.`,
      "",
    ];

    _.forEach(_.sortBy(backlinks, ["from.vaultName"]), async (backlink) => {
      const fmLineOffset = await this.getBacklinkFrontmatterLineOffset({
        link: backlink,
      });
      const entry = [
        `- in **${backlink.from.vaultName}/${backlink.from.fname}**`,
        `  - line *${backlink.position!.start.line + fmLineOffset}* column *${
          backlink.position?.start.column
        }*`,
        `  - alias: \`${backlink.alias ? backlink.alias : "None"}\``,
      ].join("\n");
      content = content.concat(entry);
    });

    const panel = window.createWebviewPanel(
      "deleteNodeNoteDeletePreview",
      "Note Delete Preview",
      ViewColumn.One,
      {}
    );
    panel.webview.html = _md().render(content.join("\n"));
    return content.join("\n");
  }

  async promptConfirmation(title: string, noConfirm?: boolean) {
    if (noConfirm) return true;
    const options = ["Proceed", "Cancel"];
    const resp = await window.showQuickPick(options, {
      title,
      placeHolder: "Proceed",
      ignoreFocusOut: true,
    });
    return resp === "Proceed";
  }

  async sanityCheck(opts?: CommandOpts) {
    if (_.isUndefined(window.activeTextEditor) && _.isEmpty(opts)) {
      return "No note currently open, and no note selected to open.";
    }
    return;
  }

  async run(opts?: CommandOpts): Promise<CommandOutput> {
    const ctx = "DeleteNoteCommand";
    if (NoteUtils.isNoteProps(opts)) {
      const out = this.deleteNote({ note: opts, opts, ctx });
      return out;
    } else {
      const editor = window.activeTextEditor as TextEditor;
      const path = this.isUriArgs(opts) ? opts : editor.document.uri;
      const mode = path.fsPath.endsWith(".md") ? "note" : "schema";
      const trimEnd = mode === "note" ? ".md" : ".schema.yml";
      const fname = _.trimEnd(Utils.basename(path), trimEnd);
      if (mode === "note") {
        const vault = this.getVaultForOpenEditor(path.fsPath);
        const note = (await this.engine.findNotes({ fname, vault }))[0];
        const out = await this.deleteNote({ note, opts, ctx });
        return out;
      } else {
        window.showInformationMessage("schema delete not implemented yet");
      }
    }
  }
  getVaultForOpenEditor(fsPath: any) {
    let vault: DVault;
    const activeDocument = window.activeTextEditor?.document;
    const fpath = fsPath || activeDocument?.uri.fsPath;
    console.log("fpath", fpath, normalizeUnixPath(fpath));
    if (
      fpath &&
      isPathInWorkspace({
        wsRoot: this.wsRoot,
        vaults: this.vaults,
        fsPath: activeDocument?.uri!,
      })
    ) {
      vault = VaultUtils.getVaultByFilePath({
        vaults: this.vaults,
        wsRoot: normalizeUnixPath(this.wsRoot.fsPath),
        fsPath: normalizeUnixPath(fpath),
      });
    } else {
      vault = this.vaults[0];
    }
    return vault;
  }
}
