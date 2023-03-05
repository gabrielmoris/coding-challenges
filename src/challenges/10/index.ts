import { SolutionFunction } from "../..";
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

console.log(
  "\x1b[44m",
  "\x1b[33m",
  "Given the root of a binary tree, return its maximum depth.",
  "\n",
  "A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.",
  "\x1b[0m"
);
export const maxDepth: SolutionFunction = (root: any): number => {
  if (!root) return 0;
  if (typeof root !== "object") {
    root = JSON.parse(root);
  }

  //recursively adds 1 for each node it finds deeper returning only the deepest one.
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};
