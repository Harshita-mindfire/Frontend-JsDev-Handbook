---
id: qxj02f4em65xllkz33rnbb2
title: embeddings
desc: ''
updated: 1767780289791
created: 1767780289791
---
Converting text into vectors(numerical form)

## OPEN AI 
- OPENAI embedding documentation: https://platform.openai.com/docs/guides/embeddings

```py
import os
from dotenv import load_dotenv
load_dotenv()  #load all the environment variables
os.environ["OPENAI_API_KEY"]=os.getenv("OPENAI_API_KEY")

from langchain_openai import OpenAIEmbeddings
embeddings=OpenAIEmbeddings(model="text-embedding-3-large")
embeddings

text="This is a tutorial on OPENAI embedding"
query_result=embeddings.embed_query(text)
len(query_result) #3072

# giving dimension of 1024
embeddings_1024=OpenAIEmbeddings(model="text-embedding-3-large",dimensions=1024) 

text="This is a tutorial on OPENAI embedding"
query_result=embeddings_1024.embed_query(text)
len(query_result) #query_result is the embedding
```


**Full workflow**
- data ingestion
```py
from langchain_community.document_loaders import TextLoader

loader=TextLoader('speech.txt')
docs=loader.load()
```

- data splitting
```py
from langchain_text_splitters import RecursiveCharacterTextSplitter

text_splitter=RecursiveCharacterTextSplitter(chunk_size=500,chunk_overlap=50)
final_documents=text_splitter.split_documents(docs)
```
- Vector Embedding And Vector StoreDB

```py
from langchain_community.vectorstores import Chroma
from langchain_openai import OpenAIEmbeddings
#needs open ai api key
#requires chromadb to be added to requiremnet.txt

embeddings=OpenAIEmbeddings(model="text-embedding-3-large",dimensions=1024) 

db=Chroma.from_documents(final_documents,embeddings)
```

- Retrieve the results from query vectorstore db

```py
query="It will be all the easier for us to conduct ourselves as belligerents"
retrieved_results=db.similarity_search(query)
print(retrieved_results)
```

## OLAMA 
Platform where we can use open source LLM models like Llama 3, gemma etc.
- can run in local
https://ollama.com/blog/embedding-models

- Pull in the embedding model you want to use: 
```txt
ollama pull mxbai-embed-large
```

- run the curl command to see if the image is present
```txt
curl http://localhost:11434/api/embeddings -d '{
  "model": "mxbai-embed-large",
  "prompt": "Represent this sentence for searching relevant passages: The sky is blue because of Rayleigh scattering"
}'
```
- create embeddings

```py
from langchain_community.embeddings import OllamaEmbeddings
embeddings = OllamaEmbeddings(model="mxbai-embed-large")

#embed_documents= list of query
r1=embeddings.embed_documents(
    [
       "Alpha is the first letter of Greek alphabet",
       "Beta is the second letter of Greek alphabet", 
    ]
)

# embed_query
text = "This is a test document."
query_result = embeddings.embed_query(text)

#query_result and r1 are vectors of 1024 dimension.
```

## HuggingFace

https://huggingface.co/

```py
from dotenv import load_dotenv, find_dotenv
import os
load_dotenv(find_dotenv())

os.environ["HF_token"] = os.getenv("HF_token")
from langchain_huggingface import HuggingFaceEmbeddings
embeddings=HuggingFaceEmbeddings(model_name="all-MiniLM-L6-v2")

query_result=embeddings.embed_query("This is a test document") #vector embedding for this text

docs_result=embeddings.embed_documents(["This is document 1","This is a test document"]) #vector embeddings for both the list items
docs_result[1]

```