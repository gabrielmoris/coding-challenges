# Depth-first Search

DFS is a graph traversal algorithm that starts at a root node and explores as far as possible along each branch before backtracking. This means it delves deeply into a branch until it reaches a dead end (no unvisited neighbors) and then returns to explore a neighbor of the previous node.

![alt text](./image.png)

Write a function that implements the depth-first search algorithm on a directed graph (in adjacency list format), given a starting node.

Examples

```typescript
const graph1 = {
  A: ["B", "C", "D"],
  B: ["E", "F"],
  C: ["G", "H"],
  D: ["I", "J"],
  E: ["D"],
  F: [],
  G: [],
  H: [],
  I: [],
  J: [],
};
depthFirstSearch(graph1, "A"); // ['A', 'B', 'E', 'D', 'I', 'J', 'F', 'C', 'G', 'H']
depthFirstSearch(graph1, "B"); // ['B', 'E', 'D', 'I', 'J', 'F']

const graph2 = {
  A: ["B", "C"],
  B: ["D", "E"],
  C: ["F", "G"],
  D: [],
  E: [],
  F: [],
  G: [],
};
depthFirstSearch(graph2, "A"); // ['A', 'B', 'D', 'E', 'C', 'F', 'G']
depthFirstSearch(graph2, "E"); // ['E']
```

### Recap (Hint)

Depth-first search (DFS) is an algorithm used for traversing a graph or a tree. The output from DFS is an array of the graph's nodes in the order they were traversed. This output is useful for a variety of different use cases and purposes, which makes DFS a useful algorithm to know. Some use cases:

- Find a specific node or group of nodes. This is common in front end to find specific DOM node(s) within the DOM tree.
- Checking if a graph is connected.
- Finding a path between two nodes in a graph.
- Generating a topological sort of a directed acyclic graph (DAG).
- Identifying cycles in a graph.
- As a building block for other algorithms.

  Here is an overview of how DFS works to traverse a graph, using the standard implementation that takes in an adjacency list (we use an array instead) and the root node:

- Initialize an array or a stack to store nodes to be visited. Push root node.
- Initialize a set to track visited nodes.
- Enter a loop that continues until the stack is empty. In each iteration of the loop:
  - Pop the top node from the array / stack.
  - Retrieve the neighbors of the node from the input graph.
  - For each neighbor, check if it has been visited. If it has not been visited, add it to the set of nodes to be visited.
- Return the set of visited nodes.

## Solution

**Clarification Questions**
If unspecified:

- Order of traversal: Should we use a standard pre-order traversal or other orders of traversal?
- Input format: What is the format of the input data? Can we assume the input will be an adjacency list in the form of a JavaScript Object where keys are nodes and values are child nodes?
- Output format: How should the output be formatted? Are there specific requirements or can we return an array with elements in the order of traversal?
- Disconnected graphs: Do we have to consider or handle the case for disconnected graphs where there are multiple subgraphs that are not connected to each other?

```typescript
export default function depthFirstSearch(
  graph: Record<string, Array<string>>,
  source: string
): Array<string> {
  // If there are no nodes in the graph, just return an empty array
  if (Object.keys(graph).length === 0) {
    return [];
  }

  // Create an stack to store the nodes to be visited. We can simulate
  // stacks using arrays in JavaScript.
  // Add the root node since we're doing a pre-order DFS.
  const toBeVisited: Array<string> = [];
  toBeVisited.push(source);

  // Initialize a set that tracks visited nodes.
  const visited = new Set<string>();

  // Loop as long as array is empty (i.e. there are still nodes to be visited).
  while (toBeVisited.length !== 0) {
    // Pop top node from array (toBeVisited) and add it to the set (visited).
    const node = toBeVisited.pop()!;
    visited.add(node);

    // Retrieve neighbors (values of the adjacency list input Object)
    const neighbors = graph[node];
    // Push neighbors, in reverse order, onto array to be visited
    // to preserve original order of neighbors when visiting (popping off the array).
    for (let i = neighbors.length - 1; i >= 0; i--) {
      const neighbor = neighbors[i];
      // First check if the neighbor has already been visited before adding it.
      if (!visited.has(neighbor)) {
        toBeVisited.push(neighbor);
      }
    }
  }

  // The visited nodes is the traversal order.
  return Array.from(visited);
}
```

We can also perform DFS recursively, which is can be more intuitive in certain cases. The recursion call stack is an implicit stack to track which nodes to visit next.

```javascript
/**
 * @param {Object} graph Node to array of neighboring nodes.
 * @param {string} source Source node to start traversal from. Has to be a valid node if graph is non-empty.
 * @return {string[]} A DFS-traversed order of nodes.
 */
export default function depthFirstSearch(graph, source) {
  // If there are no nodes in the graph, just return an empty array
  if (Object.keys(graph).length === 0) {
    return [];
  }

  // Initialize a set that tracks visited nodes.
  const visited = new Set();

  function traverse(node) {
    // Visited before, we can ignore.
    if (visited.has(node)) {
      return;
    }

    visited.add(node);
    // Recursively visit each neighbor.
    graph[node].forEach((neighbor) => {
      traverse(neighbor);
    });
  }

  // Start traversing from the source.
  traverse(source);

  // The visited nodes is the traversal order.
  return Array.from(visited);
}
```

**Edge Cases**

- Empty graphs: Return an empty array without crashing.
- Graphs with only one-two nodes: Traverse without crashing.
- Cyclic graphs: Make sure not to traverse visited nodes again.
- Disjoint graphs: Doesn't require special handling but good to be aware of.
