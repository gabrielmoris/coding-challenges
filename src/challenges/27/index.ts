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
  let root = JSON.parse(arg);
  //I start with an array with the right and left part of the three
  const stack = [[root.left, root.right]];

  while (stack.length > 0) {
    // I extract into 2 variables, right and left and first I compare, if they are not the same the three is not symetric
    const [left, right]: any = stack.pop();
    if (left?.val != right?.val) return false;

    //If it is symetric I go on and I push in the stack all the subthrees (max 4) and I go on with the comparation until there is no more items in the stack.
    (left?.left || right?.right) && stack.push([left.left, right.right]);
    (left?.right || right?.left) && stack.push([left.right, right.left]);
    console.log(stack.length, stack);
  }

  return true;
};
