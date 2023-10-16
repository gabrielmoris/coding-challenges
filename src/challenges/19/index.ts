console.log(
  "\x1b[44m",
  "\x1b[33m",
  `Given an integer array nums where the elements are sorted in ascending order, convert it to a 
  height-balanced binary search tree.`,
  "\x1b[0m"
);

//More performant, recursive function
export const sortedArrayToBST = ({ nums }: { nums: number[] }): any => {
  if (nums.length === 0) return null;

  if (nums.length === 1) return new TreeNode(nums[0]);

  const i = Math.floor(nums.length / 2);

  return new TreeNode(nums[i], sortedArrayToBST({ nums: nums.slice(0, i) }), sortedArrayToBST({ nums: nums.slice(i + 1, nums.length) }));
};

class TreeNode {
  left: any;
  right: any;
  val: number;
  constructor(val: number, left?: any, right?: any) {
    this.left = left || null;
    this.right = right || null;
    this.val = val;
  }
}
