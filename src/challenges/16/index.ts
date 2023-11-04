console.log(
  "\x1b[44m",
  "\x1b[33m",
  `You are given an integer array prices where prices[i] is the price of a given stock on the ith day.

  On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. However, you can buy it then immediately sell it on the same day.
  
  Find and return the maximum profit you can achieve.`,
  `Example 1:

  Input: prices = [7,1,5,3,6,4]
  Output: 7
  Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
  Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
  Total profit is 4 + 3 = 7.`,
  "\x1b[0m"
);
// Funciona, pero debería buscar hacerlo en O1. Es posible?
export const maxProfit = ({ stockArr }: { stockArr: number[] }): any => {
  let profits = 0;
  for (let i = 1; i < stockArr.length; i++) {
    if (stockArr[i] > stockArr[i - 1]) {
      profits = profits + stockArr[i] - stockArr[i - 1];
    }
  }
  return profits;
};
