import { SolutionFunction } from "../..";

console.log(
  "\x1b[44m",
  "\x1b[33m",
  `
  Given an integer array nums, find the subarray with the largest sum, and return its sum.
Example 1:

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: The subarray [4,-1,2,1] has the largest sum 6.
`,
  "\x1b[0m"
);

export const maxSubArray: SolutionFunction = (arg: any) => {
  const nums: number[] = arg.map((string: string) => Number(string));
  console.log(nums);
  const solution = nums.reduce((total, num): any => {
    console.log("Total", total, "NUM: ", num);
    return total + num;
  });
  return solution;
};
