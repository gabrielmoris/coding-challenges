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

Input
["MinStack","push","push","push","getMin","pop","top","getMin"]
[[],[-2],[0],[-3],[],[],[],[]]

Output
[null,null,null,null,-3,null,0,-2]

Explanation
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin(); // return -3
minStack.pop();
minStack.top();    // return 0
minStack.getMin(); // return -2
   
    `,
  "\x1b[0m"
);

class MinStack {
  stack: { [key: number]: number };
  length: number;

  constructor() {
    this.stack = {};
    this.length = 0;
  }

  push(val: number): void {
    const arrOfKeys = Object.keys(this.stack);

    if (!arrOfKeys.length) {
      this.stack[0] = val;
      this.length++;
    } else {
      this.stack[this.length] = val;
      this.length++;
    }
  }

  pop(): void {}

  top(): number {
    return this.stack[this.length - 1];
  }

  getMin(): number {
    return Object.values(this.stack).sort((a, b) => a - b)[0];
  }
}

export const minStack = () => {
  const minStack = new MinStack();
  minStack.push(-2);
  minStack.push(0);
  minStack.push(-3);
  minStack.getMin(); // return -3
  //   minStack.pop();
  minStack.top(); // return 0
  minStack.getMin(); // return -2
};
