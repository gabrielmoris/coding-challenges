console.log(
  "\x1b[44m",
  "\x1b[33m",
  `
  Implement a stack data structure in JavaScript that contains the following operations:
  new Stack(): Creates an instance of a Stack class that doesn't contain any items. The constructor does not accept any arguments.
  push(): Pushes an item onto the top of the stack and returns the new length of the stack. Required time complexity: O(1).
  pop(): Removes an item at the top of the stack and returns that item. Required time complexity: O(1).
  isEmpty(): Determines if the stack is empty. Required time complexity: O(1).
  peek(): Returns the item at the top of the stack without removing it from the stack. Required time complexity: O(1).
  length(): Returns the number of items in the stack. Required time complexity: O(1).
    
  https://www.greatfrontend.com/questions/javascript/stack?list=data-structures-algorithms
  `,
  "\x1b[0m"
);

export const createStack = () => {
  const stack = new Stack();
  console.info(stack.isEmpty(), " it Must be true"); // true
  stack.push(1);
  stack.push(2);
  console.info(stack.length(), " should be 2"); // 2
  stack.push(3);
  console.info(stack.peek(), " sholud be 3"); // 3
  console.info(stack.pop(), " sholud be 3"); // 3
  console.info(stack.isEmpty(), " sholud be false"); // false
};

class Stack<T> {
  items: T[];

  constructor() {
    this.items = [];
  }

  /**
   * Pushes an item onto the top of the stack.
   */
  push(item: T): number {
    return this.items.push(item);
  }

  /**
   * Remove an item at the top of the stack.
   */
  pop(): T | undefined {
    return this.items.pop();
  }

  /**
   * Determines if the stack is empty.
   */
  isEmpty(): boolean {
    return this.items.length === 0;
  }

  /**
   * Returns the item at the top of the stack without removing it from the stack.
   */
  peek(): T | undefined {
    return this.isEmpty() ? undefined : this.items[this.items.length - 1];
  }

  /**
   * Returns the number of items in the stack.
   */
  length(): number {
    return this.items.length;
  }
}
