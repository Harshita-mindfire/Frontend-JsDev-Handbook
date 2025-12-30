---
id: oe485i4et1p69145l89f6zi
title: Langchain
desc: ''
updated: 1766727093332
created: 1766727093332
---
- open source development framework for LLM applications.
- two packages: python and JS(TS)
- key value adds:
    - modular components
    - uses cases: common ways to combine components.

## Common components of Langchain
- **Models**
- **Prompts**: how to get models to do the work
- **Indexes**: ways of ingesting data so that you can combine it with model
- **Chains**: end to end use cases.
- **Agents**: a endtime use case which uses the model as reasoning engine.


## Memory types

**ConversationBufferMemory**
 
This memory allows for storing of messages and then extracts the messages in a variable.
 
**ConversationBufferWindowMemory**

This memory keeps a list of the interactions of the conversation over time. It only uses the last K interactions.
 
**ConversationTokenBufferMemory**
 
This memory keeps a buffer of recent interactions in memory, and uses token length rather than number of interactions to determine when to flush interactions.
 
**ConversationSummaryMemory**
 
This memory creates a summary of the conversation over time.

### Additional Memory Types
 
**Vector data memory** 

Stores text (from conversation or elsewhere) in a vector database and retrieves the most relevant blocks of text.
 
**Entity memories**
 
Using an LLM, it remembers details about specific entities.
 


You can also use multiple memories at one time.
 
E.g., Conversation memory + Entity memory to recall individuals.
 
You can also store the conversation in a conventional database (such as key-value store or SQL)


## Chains

### LLM Chain
An LLM Chain is:
>A repeatable, parameterized, composable workflow around LLM calls.

Think of it like a function instead of a one-off script.

Just like:
You can write raw SQL everywhere
But ORMs exist for large systems
```py
from langchain.chat_models import ChatOpenAI 
from langchain.prompts import ChatPromptTemplate 
from langchain.chains import 

LLMChain llm = ChatOpenAI(temperature=0.9, model=llm_model) 

prompt = ChatPromptTemplate.from_template( "What is the best name to describe \ a company that makes {product}?" ) 

chain = LLMChain(llm=llm, prompt=prompt) 
product = "Queen Size Sheet Set" 
chain.run(product) #Royal Beddings or anything the gpt responds with
```

#### Key benefits of using an LLM Chain

🔹 **1. Prompt templating & variable injection**
This becomes powerful when: Prompts are long, Variables are many, Prompts are reused across files.

**🔹 2. Reusability & maintainability** 
You define the prompt once, Instead of copy-pasting prompts everywhere.
```py
chain.run("Queen Size Sheet Set")
chain.run("Organic Soap")
chain.run("AI SaaS Platform")
```
**🔹 3. Easy model swapping & configuration**
Change model/temperature without touching your logic.
```py
llm = ChatOpenAI(model="gpt-4", temperature=0.2)
```
**🔹 4. Multi-step workflows (the real power)**
Chains become useful when steps depend on each other:
Example:

Generate product description

Extract keywords from description

Generate brand name from keywords

Validate brand name

This cannot be done with one prompt cleanly.

**🔹 5. Composition(chains calling chains) with tools, memory, retrievers**

Chains can be stacked:
```py
User Input
   ↓
Summarization Chain
   ↓
Translation Chain
   ↓
Tone Adjustment Chain
   ↓
Final Output
```

Chains can integrate:

🔍 Vector databases

🧠 Conversation memory

🛠️ Tools & function calling

🔄 Retries & fallback models

📊 Tracing & observability

Example:

```py

User Question
   ↓
Retrieve relevant docs
   ↓
Insert into prompt
   ↓
LLM answers with citations
```
This is the backbone of RAG (Retrieval-Augmented Generation).

### SequentialChain

- another type of chain that combine multiple chains where o/p of one chain is i/p of the next chain.
2 types of sequential chains: 
- **SimpleSequentialChain**: single i/p and o/p
- **SequentialChain**: any step of the chain can take multiple i/p and o/p



**SimpleSequentialChain**
```py
from langchain.chains import SimpleSequentialChain
llm = ChatOpenAI(temperature=0.9, model=llm_model)

# prompt template 1
first_prompt = ChatPromptTemplate.from_template(
    "What is the best name to describe \
    a company that makes {product}?"
)

# Chain 1
chain_one = LLMChain(llm=llm, prompt=first_prompt)

# prompt template 2
second_prompt = ChatPromptTemplate.from_template(
    "Write a 20 words description for the following \
    company:{company_name}"
)
# chain 2
chain_two = LLMChain(llm=llm, prompt=second_prompt)
overall_simple_chain = SimpleSequentialChain(chains=[chain_one, chain_two],
overall_simple_chain.run(product)
```

**SequentialChain**

```py
from langchain.chains import SequentialChain
llm = ChatOpenAI(temperature=0.9, model=llm_model)

# prompt template 1: translate to english
first_prompt = ChatPromptTemplate.from_template(
    "Translate the following review to english:"
    "\n\n{Review}"
)
# chain 1: input= Review and output= English_Review
chain_one = LLMChain(llm=llm, prompt=first_prompt, 
                     output_key="English_Review"
                    )
second_prompt = ChatPromptTemplate.from_template(
    "Can you summarize the following review in 1 sentence:"
    "\n\n{English_Review}"
)
# chain 2: input= English_Review and output= summary
chain_two = LLMChain(llm=llm, prompt=second_prompt, 
                     output_key="summary"
                    )
# prompt template 3: translate to english
third_prompt = ChatPromptTemplate.from_template(
    "What language is the following review:\n\n{Review}"
)
# chain 3: input= Review and output= language
chain_three = LLMChain(llm=llm, prompt=third_prompt,
                       output_key="language"
                      )

# prompt template 4: follow up message
fourth_prompt = ChatPromptTemplate.from_template(
    "Write a follow up response to the following "
    "summary in the specified language:"
    "\n\nSummary: {summary}\n\nLanguage: {language}"
)
# chain 4: input= summary, language and output= followup_message
chain_four = LLMChain(llm=llm, prompt=fourth_prompt,
                      output_key="followup_message"
                     )
# overall_chain: input= Review 
# and output= English_Review,summary, followup_message
overall_chain = SequentialChain(
    chains=[chain_one, chain_two, chain_three, chain_four],
    input_variables=["Review"],
    output_variables=["English_Review", "summary","followup_message"],
    verbose=True
)

review = "add some review here"
overall_chain(review)
```

### Router Chain
A Router Chain is a LangChain pattern used when you don’t want one single prompt or chain to handle every input, but instead want the system to decide which chain should run based on the input.

Think of it as an LLM-powered if / else or switch statement.

1️⃣ The core idea (plain English)

Given an input, choose the most appropriate chain to handle it.

Example:

If input is a math question → use math chain

If input is code-related → use coding chain

If input is customer support → use support chain

You route the request to the right specialist

```text
User Input
    ↓
Router Chain (decides destination)
    ↓
Chosen Sub-Chain
    ↓
Final Output
```

## Common components of RAG(Retrieval Augmented Generation)

```mermaid
  graph TD;
      Data-Source-->Data-Transformation;
      Data-Transformation-->Text-embedding;
      Text-embedding-->VectorStore-DB;
```

- Data-Source: (Load data into langchain/Data ingestion)

- Data-Transformation : (breaking data into text chunks)

- Text-embedding: converting text into vectors using embedding techniques. This is required for different algorithms to run(similarity serach). 
- VectorStore-DB: saving vectors into a vector DB ex: chromaDB, FAISS, ASTRADB

### Data Ingestion:
Loading data from a specific source.