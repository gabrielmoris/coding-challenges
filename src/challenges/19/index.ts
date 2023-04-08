import { SolutionFunction } from "../..";

console.log(
  "\x1b[44m",
  "\x1b[33m",
  `Given an integer array nums where the elements are sorted in ascending order, convert it to a 
  height-balanced binary search tree.`,
  "\x1b[0m"
);

export const sortedArrayToBST: SolutionFunction = (
  numsInput: string[]
): any => {
  const nums = numsInput.map((num) => Number(num));
  const tree = new BinaryTree();
  nums.forEach((num) => {
    tree.insert(num);
  });
  console.log(JSON.stringify(tree));
  return tree;
};

class Node {
  left: any;
  right: any;
  val: number;
  constructor(val: number) {
    this.left = null;
    this.right = null;
    this.val = val;
  }
}

class BinaryTree {
  root: any;
  constructor() {
    this.root = null;
  }
  insert(val: number) {
    const node = new Node(val);
    if (this.root === null) {
      this.root = node;
    } else {
      let nodePos = this.root;
      while (nodePos !== null) {
        if (val < nodePos.val) {
          //Here check then right
          if (!nodePos.left) {
            nodePos.left = node;
            return this;
          }
          nodePos = nodePos.left;
        }
        if (val > nodePos.val) {
          //Here check then right
          if (!nodePos.right) {
            nodePos.right = node;
            return this;
          }
          nodePos = nodePos.right;
        }
      }
    }
  }
}
