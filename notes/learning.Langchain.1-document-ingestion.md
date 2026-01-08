---
id: duydba1xzdaypg4p9egmt3g
title: Document Ingestion
desc: ''
updated: 1767094584666
created: 1767094584666
---
Loading data from a specific source.
## Document Loaders
[Official docs](https://docs.langchain.com/oss/python/integrations/document_loaders)

- all document loaders are in this package: ***langchain_community.document_loaders***

- requirements: based on the document loader type(pdf, arxiv, text etc) the frequirements would change.
```txt
langchain
ipykernel
langchain_community
```

```py
## Text loader
from langchain_community.document_loaders import TextLoader
loader = TextLoader('speech.txt')
text_document=loader.load()
text_document

## Arxiv Loader(research paper)
from langchain_community.document_loaders import ArxivLoader
loader = ArxivLoader(
    query="1706.03762",
    load_max_docs=2,
)
docs = loader.load()
docs[0]
```