console.log(
  "\x1b[44m",
  "\x1b[33m",
  `
1. Implement a queue data structure in JavaScript that contains the following operations:
2. To ensure O(1) Implement the queue using a double linked list.


new Queue(): Creates an instance of a Queue class that doesn't contain any items. The constructor does not accept any arguments.
enqueue(): Adds an item to the back of the queue. Required time complexity: O(1).
dequeue(): Removes an item from the front of the queue. Required time complexity: O(1).
isEmpty(): Determines if the queue is empty. Required time complexity: O(1).
front(): Returns the item at the front of the queue without removing it from the queue. Required time complexity: O(1).
back(): Returns the item at the back of the queue without removing it from the queue. Required time complexity: O(1).
length(): Returns the number of items in the queue. Required time complexity: O(1).
https://www.greatfrontend.com/questions/javascript/queue?list=data-structures-algorithms
  `,
  "\x1b[0m"
);

export default function createQueue() {
  const queue = new Queue();
  console.log(queue.isEmpty()); // true
  console.log(queue.enqueue(1));
  console.log(queue.enqueue(2));
  console.log(queue.length()); // 2
  console.log(queue.enqueue(3));
  console.log(queue.front()); // 1
  console.log(queue.back()); // 3
  console.log(queue.dequeue()); // 1
  console.log(queue.isEmpty()); // false
}

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

/* 
- Queues should be implemented with linked lists which are essentially a chain of connected nodes.
- To simplify handling of linked list manipulation of empty queues, I make use of doubly-linked lists
 (nodes have both prev and next pointers) and dummy/sentinel head/tail nodes.
- With the usage of dummy nodes, the linked list will never be "empty" and I don't have to separately
  handle the case of enqueuing into empty queues and dequeuing a queue with only one item.
*/

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
   * @param {T} item The item to be pushed onto the queue.
   * @return {number} The new length of the queue.
   */
  enqueue(item: T): number {
    // prev ---> DUMMY TAIL ---> NEW NODE ----> Dummy HEAD--->next

    // Create the Node
    const nodeItem = new Node(item);
    // Get the last node
    const formerPrev = this._dummyTail.next; // In empty Queue this would be _dummyHead
    formerPrev!.prev = nodeItem;

    nodeItem.next = formerPrev;
    nodeItem.prev = this._dummyTail;
    this._dummyTail.next = nodeItem;

    this._length++;
    return this._length;
  }

  /**
   * Removes an item from the front of the queue.
   * @return {T | undefined} The item at the front of the queue if it is not empty, `undefined` otherwise.
   */
  dequeue(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }

    // prev(null)<--dummyTail--->next(dequeued)--->next(dummyHead)--->next(null)
    const dequeuedNode = this._dummyHead.prev;
    const newFirstNode = dequeuedNode!.prev;
    this._dummyHead.prev = newFirstNode;
    newFirstNode!.next = this._dummyHead;

    dequeuedNode!.prev = null;
    dequeuedNode!.next = null;

    this._length--;
    return dequeuedNode!.value;
  }

  /**
   * Determines if the queue is empty.
   * @return {boolean} `true` if the queue has no items, `false` otherwise.
   */
  isEmpty(): boolean {
    return this._length === 0;
  }

  /**
   * Returns the item at the front of the queue without removing it from the queue.
   * @return {T | undefined} The item at the front of the queue if it is not empty, `undefined` otherwise.
   */
  front(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }
    return this._dummyHead.prev!.value;
  }

  /**
   * Returns the item at the back of the queue without removing it from the queue.
   * @return {T | undefined} The item at the back of the queue if it is not empty, `undefined` otherwise.
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
