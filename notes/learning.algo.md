---
id: 8065ff8i49o4xwg1za7tgro
title: Algo
desc: ''
updated: 1650870501456
created: 1650870488071
---
This hierarchy contains my notes for algorithms


## Binary Search Tree

Binary Search Tree is a node-based binary tree data structure which has the following properties:

- The left subtree of a node contains only nodes with keys lesser than the node’s key.
- The right subtree of a node contains only nodes with keys greater than the node’s key.
- The left and right subtree each must also be a binary search tree.


Inorder traversal(Left --> Root --> Right) of BST gives a sorted values.


## AVL Tree
AVL tree is a self-balancing Binary Search Tree (BST) where the difference between heights of left and right subtrees cannot be more than one for all nodes.

## Graph Algos
https://www.youtube.com/watch?v=cWNEl4HE2OE

### Creating adjacency list
```js
const airports = "Del Mum Kol Bng Deh Pnt".split(" ");
//console.log(airports);
const routes = [
    ["Del", "Deh"],
    ["Del", "Mum"],
    ["Del","Bng" ],
    ["Mum", "Kol"],
    ["Deh", "Pnt"]
    ];

const adjacencyList = new Map();// add key value
function addNode(airport) {
    adjacencyList.set(airport,[])
}
airports.forEach(airport => addNode(airport));
//console.log(adjacencyList);

function addEdge(src, dest) {
    adjacencyList.get(src).push(dest);
    adjacencyList.get(dest).push(src);
}
routes.forEach(route => addEdge(...route))
// console.log(adjacencyList);
```
### DFS

```js
function Dfs(root, visited = new Set()) {
    visited.add(root);
    const dests = adjacencyList.get(root);
    
    dests.forEach(dest => {
        console.log(dest)
        if(dest === "Deh") {
            console.log("reached");
            return;
        }
        if(!visited.has(dest)) {
            Dfs(dest, visited)
        }
    })
}
Dfs("Mum")
```

### BFS

```js
// BFS with entry point Mum (also log if reached Bng)

function BFS(root) {
    const visited = new Set();
    const queue = [root]
    visited.add(root)

    while(queue.length > 0) {
        const airport = queue.shift(1);
        const dests = adjacencyList.get(airport);
        dests.forEach(dest => {
            console.log(dest)
            if(dest === "Bng") console.log("Reached Bng")
        if(!visited.has(dest)){
            visited.add(dest)
            queue.push(dest) 

        }
        }
            )
    }
    console.log(visited)

}
BFS("Mum")
```