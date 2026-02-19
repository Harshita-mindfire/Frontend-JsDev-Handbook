
## FAISS
```py
from langchain_community.document_loaders import TextLoader
from langchain_community.embeddings import OllamaEmbeddings
from langchain_community.vectorstores import FAISS
from langchain_text_splitters import CharacterTextSplitter

## loading text
loader=TextLoader("speech.txt")
documents=loader.load()

## trnsforming into chunks
text_splitter = CharacterTextSplitter(chunk_size=1000,chunk_overlap=30)
docs= text_splitter.split_documents(documents)

## creating embeddings
embeddings = OllamaEmbeddings(model="mxbai-embed-large")
## storing embeddings into DB
db = FAISS.from_documents(docs, embeddings)

## querying the DB
query="How does the speaker describe the desired outcome of the war?"
ans=db.similarity_search(query)
ans[0].page_content
# consoles somethig like: 'It will be all the easier for us to conduct ourselves as belligerents in a high spirit of right and fairness because we act without animus, not in enmity toward a people or with the desire to bring any injury or disadvantage upon them, but only in armed opposition to an irresponsible government which has thrown aside all considerations of humanity and of right and is running amuck.'

query_vector=embeddings.embed_query(query)
db.similarity_search_by_vector(query_vector)


### Retriever
# acts as an interface for vector DB. Used with langchain.
retriever=db.as_retriever() # converting vector db into a retriever. This now can be used by any LLM model in langchain to query our vector DB
docs=retriever.invoke(query)
docs[0].page_content

## save db 
db.save_local("faiss_index") #saves into a .pkl file

## Load db
new_db = FAISS.load_local("faiss_index", embeddings, allow_dangerous_deserialization=True)
docs=new_db.similarity_search(query)
```

## Chroma
Chroma is a AI-native open-source vector database focused on developer productivity and happiness. Chroma is licensed under Apache 2.0.

https://python.langchain.com/v0.2/docs/integrations/vectorstores/
```py

## building a sample vectordb
from langchain_chroma import Chroma
from langchain_community.document_loaders import TextLoader
from langchain_community.embeddings import OllamaEmbeddings
from langchain_text_splitters import RecursiveCharacterTextSplitter

loader = TextLoader("speech.txt")
data = loader.load()

# Split
text_splitter = RecursiveCharacterTextSplitter(chunk_size=500, chunk_overlap=0)
splits = text_splitter.split_documents(data)

#embed
embedding=OllamaEmbeddings(model="mxbai-embed-large")
vectordb=Chroma.from_documents(documents=splits,embedding=embedding)

## query it
query = "What does the speaker believe is the main reason the United States should enter the war?"
docs = vectordb.similarity_search(query)
docs[0].page_content

## Saving to the disk
vectordb=Chroma.from_documents(documents=splits,embedding=embedding,persist_directory="./chroma_db")

# load from disk
db2 = Chroma(persist_directory="./chroma_db", embedding_function=embedding)
docs=db2.similarity_search(query)
print(docs[0].page_content)

## similarity Search With Score
docs = vectordb.similarity_search_with_score(query)
docs

### Retriever option
retriever=vectordb.as_retriever()
retriever.invoke(query)[0].page_content

```
