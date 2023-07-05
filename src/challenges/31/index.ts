import { SolutionFunction } from "../..";

console.log(
  "\x1b[44m",
  "\x1b[33m",
  `
  You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

Example 1:

Input: nums = [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
Total amount you can rob = 1 + 3 = 4.
`,
  "\x1b[0m"
);

export const rob: any = (arg: any) => {
  const n = arg.map((string: string) => Number(string));

  let include = 0;
  let exclude = 0;

  // In each loop i have a temporal var that is the include
  // then I check what is higher the include or the exclude (include of the last loop)
  // afterwards I save the include of the beginning (saved in temp) into exclude
  // I return the highest at the end of the loop

  for (let i = 0; i < n.length; i++) {
    console.log(i + ": ", include, exclude);
    const temp = include;
    include = Math.max(include, exclude + n[i]);
    exclude = temp;
  }
  return Math.max(include, exclude);
};
