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
  // maybe buy and put an array with index and minor price and check each time!!??
  let buy = 0;
  let sell = 0;
  prices.forEach((price, index) => {
    if (buy === 0 || buy > price) {
      buy = price;
    }
    console.log(buy, index);
  });
};
