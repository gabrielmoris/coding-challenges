import { SolutionFunction } from "../..";

console.log(
  "\x1b[44m",
  "\x1b[33m",
  `
  Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).
Example 1:

Input: root = [1,2,2,3,4,4,3]
Output: true
`,
  "\x1b[0m"
);

class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

export const isSymmetric: SolutionFunction = (arg: any): boolean => {
  let root;
  const str1 = "";
  const srtr2 = "";

  try {
    root = JSON.parse(arg);
  } catch {
    root = arg;
  }

  //I Iterate thwough the node and save in string the numbers, then I compare

  while (root !== null) {}

  return false;
};
