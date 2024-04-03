---
id: gqbkj2606jvpreq2kgwp6g3
title: Compiler
desc: ''
updated: 1712125592712
created: 1712125592712
---

## Compiling single file

```bash
    tsc app.ts
```

- watch mode: `-w` or `--watch`

```bash
    tsc app.ts -w
```

## Compiling multiple files / entire project
1. **tsc --init** : Run this cmd from root dir. This command creates a tsconfig.json file. It has bunch of configurations for entire project.
2. Now running **tsc** or **tsc -w** will compile and watch all the `.ts` files in project.


### Configuration

The tsconfig.json has several options to configure how ts comoiler should behave for a project. Some of them are:

- **include**: Specifies an array of filenames or patterns to include in the program. These filenames are resolved relative to the directory containing the tsconfig.json file. If we have both include and exclude, exclude will filter out the files from include. so compiled files will be include - exclude.

- **exclude**:  Specifies an array of filenames or patterns that should be skipped when resolving include. It is not a mechanism that prevents a file from being included in the codebase - it simply changes what the include setting finds. Can also add regex. eg:
    ```json
        "exclude": ["node_modules"] // this is the default behaviour.
    ```

- **files**: Specifies an allowlist of files to include in the program. An error occurs if any of the files can’t be found.

- **target**: Set the JavaScript language version for emitted JavaScript and include compatible library declarations. eg: 
```json
{"target": "es6" }
```

- **sourceMap**: simplifies debugging. When set this option **true**, it creates .map files which are understood by modern browsers. This allows us to see .ts files in the browser's source tab. Now you can add breakpoints in ts files instead of compiled js in browser.

- **outDir**: folder to store o/p files. Generally ./dist
- **rootDir**: specify root directory of input files. 
- **removeComments**: when set to true, won't emit comments to output files.
- **noEmitOnError**: (default: false), when set to true, do not generate output file if input file has compilation error.

## Reference
- tsconfig Docs: https://www.typescriptlang.org/docs/handbook/tsconfig-json.html

- Compiler Config Docs: https://www.typescriptlang.org/docs/handbook/compiler-options.html

- VS Code TS Debugging: https://code.visualstudio.com/docs/typescript/typescript-debugging