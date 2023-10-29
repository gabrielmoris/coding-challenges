console.log(
  "\x1b[44m",
  "\x1b[33m",
  `
  Given the root of a binary tree, return the inorder traversal of its nodes' values.

 

  Example 1:
  
  
  Input: root = [1,null,2,3]
  Output: [1,3,2]
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

let visited: number[];
export const inorderTraversal = (root: { node: { left: any; val: number; right: any } }): number[] => {
  visited = [];
  traverse(root);
  return visited;
};

const traverse = ({ node }: { node: { left: any; val: number; right: any } }) => {
  if (node?.left != null) traverse({ node: node.left });
  if (node?.val != undefined) {
    visited.push(node?.val);
  }
  if (node?.right != null) traverse({ node: node.right });
};
