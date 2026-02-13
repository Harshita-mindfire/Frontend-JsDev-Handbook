---
id: g9anqrp0zrf7ge81edgx8yo
title: Version-1
desc: ''
updated: 1769753131290
created: 1769753131290
---

## Agents

- Without tools
![alt text](/assets/images/image.png)

- With tools
![alt text](/assets/images/image-1.png)


### Creating agents with langchain

```py
from langchain.agents import create_agent
model=ChatGroq(model="llama-3.1-8b-instant",groq_api_key=groq_api_key)

def get_weather(city:str)->str:
    "This tool returns the weather of a given city"
    return f"The weather of {city} is sunny"

agent= create_agent(model=model,
                    tools=[get_weather],
                    system_prompt="You are a helpful assistant"
                    )
response=agent.invoke({"messages": [{"role": "user", "content": "What is the weather in Delhi"}]}
)
response
```

## Integrating LLM models
1. using provider specifc langchain library
```py
model=ChatGroq(model="llama-3.1-8b-instant",groq_api_key=groq_api_key)
```
2. using `init_chat_model` from langchain.chat_model
```py
from langchain.chat_models import init_chat_model
os.environ["GROQ_API_KEY"]=os.getenv("GROQ_API_KEY")

model = init_chat_model("groq:llama-3.1-8b-instant")
model
```


## Batching

```py
messages = ["What was the main theme of Metamorphosis nover", "Who is considered the father of economics and why", "What is Big bang theory"];
responses = model.batch(messages)
for response in responses:
    print(response)

```

## Streaming
```py
for chunk in model.stream("What is our sky blue?") :
    print(chunk.text, end="", flush=True)
```

## Middleware
- [builtin middleware](https://docs.langchain.com/oss/javascript/langchain/middleware/built-in): Summarization middleware, human i the feedback, model call limit etc.
