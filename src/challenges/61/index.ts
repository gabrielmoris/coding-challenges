console.log(
  "\x1b[44m",
  "\x1b[33m",
  `
  Write a function that implements the breadth-first search (BFS) algorithm on a directed graph (in adjacency list format), given a starting node.
  https://www.greatfrontend.com/questions/javascript/breadth-first-search?list=data-structures-algorithms
  `,
  "\x1b[0m"
);
/**
 * @param graph The adjacency list representing the graph.
 * @param source The source node to start traversal from. Has to be a valid node if graph is non-empty.
 * @return A BFS-traversed order of nodes.
 */
export const breadthFirstSearch = ({ graph }: { graph: Record<string, Array<string>> }, { source }: { source: string }): [string] | [] => {
  let result = new Set();

  const keys = Object.keys(graph);

  if (keys.length === 0) {
    return [];
  }

  const queue = new Queue();
  queue.enqueue(source);

  while (!queue.isEmpty()) {
    const node = queue.dequeue() as never;
    result.add(node);

    graph[node].forEach((neighbor) => {
      if (result.has(neighbor)) {
        return;
      }
      queue.enqueue(neighbor);
    });
  }

  return Array.from(result) as [string];
};

/*  Auxiliary classes */

/**
 * A Queue class with O(1) enqueue and dequeue is provided for you.
 * You can use it directly should you wish to.
 *
 * Example usage:
 * const q = new Queue();
 * q.enqueue('a');
 * q.enqueue('b');
 * q.dequeue(); //'a'
 * q.isEmpty(); // False
 */

class Node<T> {
  value: T;
  next: Node<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

class Queue<T> {
  head: Node<T> | null;
  tail: Node<T> | null;
  length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  isEmpty(): boolean {
    return this.length === 0;
  }

  enqueue(item: T): void {
    const newNode = new Node(item);
    if (this.isEmpty()) {
      this.head = newNode;
    } else if (this.tail) {
      this.tail.next = newNode;
    }
    this.tail = newNode;
    this.length++;
  }

  dequeue(): T | null {
    if (this.isEmpty() || !this.head) {
      return null;
    } else {
      const removedNode = this.head;
      this.head = this.head.next;
      removedNode.next = null;
      this.length--;
      if (this.isEmpty()) {
        this.tail = null;
      }
      return removedNode.value;
    }
  }
}
