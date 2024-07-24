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

class Queue<T> {
  private _queue;

  constructor() {
    this._queue = new Array();
  }

  /**
   * Adds an item to the back of the queue.
   * @param {T} item The item to be pushed onto the queue.
   * @return {number} The new length of the queue.
   */
  enqueue(item: T): number {
    this._queue.push(item);
    return this._queue.length;
  }

  /**
   * Removes an item from the front of the queue.
   * @return {T | undefined} The item at the front of the queue if it is not empty, `undefined` otherwise.
   */
  dequeue(): T | undefined {
    if (this.isEmpty()) return undefined;
    const frontItem = this._queue.shift();
    return frontItem;
  }

  /**
   * Determines if the queue is empty.
   * @return {boolean} `true` if the queue has no items, `false` otherwise.
   */
  isEmpty(): boolean {
    return this._queue.length === 0;
  }

  /**
   * Returns the item at the front of the queue without removing it from the queue.
   * @return {T | undefined} The item at the front of the queue if it is not empty, `undefined` otherwise.
   */
  front(): T | undefined {
    return this._queue[0];
  }

  /**
   * Returns the item at the back of the queue without removing it from the queue.
   * @return {T | undefined} The item at the back of the queue if it is not empty, `undefined` otherwise.
   */
  back(): T | undefined {
    return this._queue[this._queue.length - 1];
  }

  /**
   * Returns the number of items in the queue.
   * @return {number} The number of items in the queue.
   */
  length(): number {
    return this._queue.length;
  }
}
