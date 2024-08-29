console.log(
  "\x1b[44m",
  "\x1b[33m",
  `
Implement a function that performs a topological sort on a directed graph (in adjacency list format), where the keys represent nodes and values are an array of nodes that have an outgoing edge to the current node.

https://www.greatfrontend.com/questions/javascript/topological-sort?list=data-structures-algorithms
  `,
  "\x1b[0m"
);

// MAIN
export default function fnWrapper(arrArg: {
  default: Record<string, Array<string>>;
}): Array<string> {
  const graph = arrArg.default;

  return topologicalSort(graph);
}

// CHALLENGE
function topologicalSort(graph: Record<string, Array<string>>): Array<string> {
  const solution: string[] = [];
  const nodes = new Map();
  const queue = new Queue();

  // 1. Set the nodes
  for (let key of Object.keys(graph)) {
    nodes.set(key, { in: 0, out: new Set(graph[key]) });
  }

  // 2. Set the neighbours of the nodes
  for (let key of Object.keys(graph)) {
    for (let neighbor of graph[key]) {
      nodes.get(neighbor).in += 1;
    }
  }

  // 3. queue nodes whose in value is 0
  nodes.forEach((value, node) => {
    if (value.in === 0) {
      queue.enqueue(node);
    }
  });

  // 4. dequeue
  while (queue.length()) {
    // Main node dequeue
    const node = queue.dequeue() as string;

    // check if it has neighbours
    nodes.get(node).out.forEach((neighbor: string) => {
      nodes.get(neighbor).in -= 1;
      if (nodes.get(neighbor).in === 0) {
        queue.enqueue(neighbor);
      }
    });

    // push to solution the dequeued Node
    solution.push(node);
  }

  // If it is cyclic, it wouldn't have the same length
  return Object.keys(graph).length === solution.length ? solution : [];
}

// `Queue` data structure is provided in case you want to use it.
class Node<T> {
  value: T | undefined;
  next: Node<T> | null;
  prev: Node<T> | null;

  constructor(value?: T) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class Queue<T> {
  _dummyHead: Node<T>;
  _dummyTail: Node<T>;
  _length: number;

  constructor() {
    this._dummyHead = new Node<T>();
    this._dummyTail = new Node<T>();
    this._dummyHead.prev = this._dummyTail;
    this._dummyTail.next = this._dummyHead;
    this._length = 0;
  }

  /**
   * Adds an item to the back of the queue.
   */
  enqueue(item: T) {
    const node = new Node(item);
    const prevLast = this._dummyTail.next;
    prevLast!.prev = node;

    node.next = prevLast;
    node.prev = this._dummyTail;
    this._dummyTail.next = node;
    this._length++;
    return this._length;
  }

  /**
   * Remove an item from the front of the queue.
   */
  dequeue(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }

    const node = this._dummyHead.prev;
    const newFirst = node!.prev;
    this._dummyHead.prev = newFirst;
    newFirst!.next = this._dummyHead;
    // Unlink the node to be dequeued.
    node!.prev = null;
    node!.next = null;
    this._length--;
    return node!.value;
  }

  /**
   * Determines if the queue is empty.
   */
  isEmpty(): boolean {
    return this._length === 0;
  }

  /**
   * Returns the item at the front of the queue without removing it from the queue.
   */
  front(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }

    return this._dummyHead.prev!.value;
  }

  /**
   * Returns the item at the back of the queue without removing it from the queue it.
   */
  back(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }

    return this._dummyTail.next!.value;
  }

  /**
   * Returns the number of items in the queue.
   * @return {number} The number of items in the queue.
   */
  length(): number {
    return this._length;
  }
}
