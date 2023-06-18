import { SolutionFunction } from "../..";

console.log(
  "\x1b[44m",
  "\x1b[33m",
  `
  You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Example 1:

Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps

Example 2:

Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
`,
  "\x1b[0m"
);

export const climbStairs = (arg: number | string[]): number => {
  const n = typeof arg !== "number" ? Number(arg[0]) : arg;

  return n <= 3 ? n : 2 * climbStairs(n - 2) + climbStairs(n - 3);

  // if (n <= 2) {
  //   return n;
  // }
  // return climbStairs(n - 1) + climbStairs(n - 2);
};

// HOW TO ANALYZE THIS KIND OR PROBLEM!

// If we start making outputs for n starting from 1:

// n = 1, Output: 1
// 1 step

// n = 2, Output: 2
// 1 step + 1 step
// 2 steps

// n = 3, Output: 3
// 1 step + 1 step + 1 step
// 1 step + 2 steps
// 2 steps + 1 step

// n = 4, Output: 5
// 1 step + 1 step + 1 step + 1 step
// 1 step + 1 step + 2 steps
// 1 step + 2 steps + 1 step
// 2 steps + 1 step + 1 step
// 2 steps + 2 steps

// output will always be:
// distinct ways for n stairs = distinct ways for n-1 + distinct ways for n-2
// climbStairs(n) = climbStairs(n-1) + climbStairs(n-2)

// If we submit this solution, it throws runtime error. So we can try to simplify it more:
// climbStairs(n) = climbStairs(n-1) + climbStairs(n-2)
// climbStairs(n) = (climbStairs(n-2) + climbStairs(n-3)) + climbStairs(n-2)
