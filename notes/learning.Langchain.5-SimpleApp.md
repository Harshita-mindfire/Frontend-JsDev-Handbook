---
id: 0jmd9qrvoy9orbl1n2mzxla
title: Simple Gen AI APP Using Langchain
desc: ''
updated: 1768816886326
created: 1768816886326
---

```py
import os
from dotenv import load_dotenv
load_dotenv()

os.environ['OPENAI_API_KEY']=os.getenv("OPENAI_API_KEY")
## Langsmith Tracking
os.environ["LANGCHAIN_API_KEY"]=os.getenv("LANGCHAIN_API_KEY")
os.environ["LANGCHAIN_TRACING_V2"]="true"
os.environ["LANGCHAIN_PROJECT"]=os.getenv("LANGCHAIN_PROJECT")


## Data Ingestion--From the website we need to scrape the data
from langchain_community.document_loaders import WebBaseLoader

loader=WebBaseLoader("https://docs.smith.langchain.com/tutorials/Administrators/manage_spend")
docs=loader.load()

### Load Data--> Docs-->Divide our Docuemnts into chunks dcouments-->text-->vectors-->Vector Embeddings--->Vector Store DB
from langchain_text_splitters import RecursiveCharacterTextSplitter

text_splitter=RecursiveCharacterTextSplitter(chunk_size=1000,chunk_overlap=200)
documents=text_splitter.split_documents(docs)

## Embed
from langchain_openai import OpenAIEmbeddings
embeddings=OpenAIEmbeddings()

## Vectore store
from langchain_community.vectorstores import FAISS
vectorstoredb=FAISS.from_documents(documents,embeddings)


## Query vector db
## Query From a vector db
query="LangSmith has two usage limits: total traces and extended"
result=vectorstoredb.similarity_search(query)
result[0].page_content

## creating Retrieval chain using open ai model

from langchain_openai import ChatOpenAI
llm=ChatOpenAI(model="gpt-4o")


from langchain.chains.combine_documents import create_stuff_documents_chain
from langchain_core.prompts import ChatPromptTemplate 

prompt=ChatPromptTemplate.from_template( """ Answer the following question based only on the provided context: <context> {context} </context> """ ) 
document_chain=create_stuff_documents_chain(llm,prompt) 


retriever=vectorstoredb.as_retriever() ### created retriever

from langchain.chains import create_retrieval_chain
retrieval_chain=create_retrieval_chain(retriever,document_chain)#uses retriever as context now

## Get the response form the LLM
response=retrieval_chain.invoke({"input":"LangSmith has two usage limits: total traces and extended"})

response['answer']
```
