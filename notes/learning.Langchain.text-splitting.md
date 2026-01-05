---
id: 1rujyxrb9vcc5vpxg0s0o8c
title: Text splitting from Documents
desc: ''
updated: 1767610546433
created: 1767610546433
---
- requirements
```txt
langchain-text-splitters
```
## RecursiveCharacter Text Splitters (RecursiveCharacterTextSplitter)

```py
from langchain_community.document_loaders import TextLoader
from langchain_text_splitters import RecursiveCharacterTextSplitter

loader = TextLoader("speech.txt")
docs = loader.load()
text_splitter = RecursiveCharacterTextSplitter(chunk_size=35, chunk_overlap=10)
#Use split_documents when you already have Document objects.
# type(docs) ==> List[Document], hence used split_documents
# Use create_documents when you have raw text. eg: if type(docs) => List[str]
final_docs=text_splitter.split_documents(docs)
final_docs
```

This text splitter is the recommended one for generic text. It is parameterized by a list of characters. It tries to split on them in order until the chunks are small enough. The default list is ["\n\n", "\n", " ", ""]. This has the effect of trying to keep all paragraphs (and then sentences, and then words) together as long as possible, as those would generically seem to be the strongest semantically related pieces of text.

- How the text is split: by list of characters.
- How the chunk size is measured: by number of characters.

**What constraints is it trying to satisfy?**

Primarily:
-chunk_size – each chunk must be ≤ this size
-chunk_overlap – overlap between chunks
- Semantic preservation – avoid splitting in the middle of sentences/words if possible

**How the recursion works**

You give the splitter an ordered list of separators, for example:
```py
["\n\n", "\n", " ", ""]
```
The splitter tries them in order:
1. Try the first separator (e.g. \n\n)
    - Does splitting by this produce chunks ≤ chunk_size?

    - If yes → ✅ it works, stop here.

2. If chunks are still too large → recurse

    - Try the next separator (\n)
    
3.Continue until a separator works

4. If nothing works → fall back to **character-level splitting ("")**

## Character Text Splitters (CharacterTextSplitter)
This is the simplest method. This splits based on a given character sequence, which defaults to "\n\n". Chunk length is measured by number of characters.

1. How the text is split: by single character separator.
2. How the chunk size is measured: by number of characters.

```py
from langchain_community.document_loaders import TextLoader
from langchain_text_splitters import CharacterTextSplitter

loader = TextLoader("speech.txt")
docs = loader.load()
#by default separator=\n\n
text_splitter=CharacterTextSplitter(separator=" ", chunk_size=40, chunk_overlap=15)
final_docs=text_splitter.split_documents(docs)
final_docs
```