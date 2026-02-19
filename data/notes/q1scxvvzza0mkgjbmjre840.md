- LangGraph is a low-level orchestration framework and runtime for building, managing, and deploying long-running, stateful agents.
- used to design agents that reliably handle complex tasks

## Components
1. State
2. Node
3. Edges
4. StateGraph

- In LangGraph, your State is essentially the Global Props of your graph.
- Every "Node" (function) in your graph is like a component that receives these State "Props."
- Immutability: Just like you wouldn't directly mutate state in a Redux reducer or a React setState, LangGraph nodes receive the current state, and you return a new object (or a patch) that updates it. But we only send the updated property, the lang graph does the shallow mapping.



## Simple app

![Simple code review langgraph](/assets/images/coder_langgraph.png)

```py
from langgraph.graph import StateGraph, START
from langchain_groq  import ChatGroq
from typing import TypedDict, List, Literal

coder_llm = ChatGroq(model="llama-3.1-8b-instant")

#1 state(almost similar to interface in .ts)
class CodeState(TypedDict):
    feedback: List[str]
    is_valid: bool
    code: str

#2 nodes
def coder_node(state: CodeState):
    if not state.get("is_valid", True):
        print("Rewriting the code for feedback")
        return {"code": "print('Hello World')", "is_valid": True}
    #First time introducing bug ourselves    
    print("writing code...")
    return {"code": "print('Hello World"}

def review_node(state: CodeState):
    print("Reviewing code...", state["code"])
    response = coder_llm.invoke(f"Is this syntax valid? Respond in YES or NO {state['code']}")
    print("LLM said",response.content)
    is_valid = "YES" in response.content
    return {"is_valid": is_valid} 

#3. conditional edge
def check_feedback(state: CodeState)-> Literal["code", "__end__"]:
    if not state["is_valid"]:
        print("Review failed! sending back to coder")
        return "code"
    
    print("Review passed")
    return "__end__"


#4. Build graph
graph = StateGraph(CodeState)
graph.add_node("code", coder_node)
graph.add_node("review", review_node)
graph.add_conditional_edges("review", check_feedback)

graph.add_edge(START, "code")
graph.add_edge("code", "review")
builder_graph = graph.compile()

output = builder_graph.invoke({"code": "", "feedback": [], "is_valid": True})

```

After running the output is
```txt
writing code...
Reviewing code... print('Hello World
LLM said NO
Review failed! sending back to coder
Rewriting the code for feedback
Reviewing code... print('Hello World')
LLM said YES 

print('Hello World')
Review passed
```

**NOTE**: Notice that nodes only returns {"is_valid": ...}. or {"code": ...} It doesn't have to return the whole state object. LangGraph automatically merges (shallow merge) the return value into the existing state, similar to how setState works in React.

## Misc

**TypedDict** is almost identical to a TypeScript interface. It provides structural typing and IDE autocompletion, but it largely disappears at runtime (Python doesn't "crash" if you break the rules, much like how transpiled JS doesn't care about your TS interfaces).

**Pydantic** is like using a TypeScript Class with a Validation Library (like Zod or io-ts). It checks the data at runtime and throws an error if the types don't match.

The "**Double Underscore**" Constants: You’ll see `__end__` or END. These are built-in markers that tell the graph "we are done."

In LangGraph, **compile**() validates the graph. It checks if you have any "dead ends" (nodes with no edges) or if your conditional logic points to nodes that don't exist. It turns your definition into a Runnable that supports streaming and checkpoints.