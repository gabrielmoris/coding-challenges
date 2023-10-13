console.log(
  "\x1b[44m",
  "\x1b[33m",
  `
  Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

Implement the MinStack class:

MinStack() initializes the stack object.
void push(int val) pushes the element val onto the stack.
void pop() removes the element on the top of the stack.
int top() gets the top element of the stack.
int getMin() retrieves the minimum element in the stack.
You must implement a solution with O(1) time complexity for each function.

 
https://leetcode.com/problems/min-stack/
   
  `,
  "\x1b[0m"
);

class MinStack {
  stack: number[];
  constructor() {
    this.stack = [];
  }

  push(val: number): void {
    this.stack = [val, ...this.stack];
  }

  pop(): void {
    this.stack = this.stack.slice(1, this.stack.length);
  }

  top(): number {
    return this.stack[0];
  }

  getMin(): number {
    let min: number | null = null;
    this.stack.forEach((n) => {
      if (min === null) min = n;
      if (n < min) min = n;
    });
    if (min != null) return min;
    else return 0;
  }

  log(): void {
    console.log(this.stack);
  }
}

export const minstack = (): void => {
  const minStack = new MinStack();
  minStack.push(-2);
  minStack.push(0);
  minStack.push(-3);
  console.log(minStack.getMin()); // return -3
  minStack.pop();
  console.log(minStack.top()); // return 0
  console.log(minStack.getMin()); // return -2

  minStack.log();
};
