import { SolutionFunction } from "../..";

console.log(
  "\x1b[44m",
  "\x1b[33m",
  `You are given an array prices where prices[i] is the price of a given stock on the ith day.

  You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
  
  Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.`,
  "\x1b[0m"
);

//More performant, recursive function
export const missingNumber: SolutionFunction = (nums1: any[]): any => {
  const prices = nums1.map((item) => Number(item));

  let min = prices[0];
  let max = 0;

  for (let current of prices) {
    // Each iteration It saves the slowest number and chooses between the current max
    // or the number of iteration minus the minimum number. At the end i return the max (the rest of min + the highest number)
    min = Math.min(min, current);
    max = Math.max(max, current - min);
  }

  return max;
};
