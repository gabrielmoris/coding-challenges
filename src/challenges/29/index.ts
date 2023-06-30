import { SolutionFunction } from "../..";

console.log(
  "\x1b[44m",
  "\x1b[33m",
  `
  Given an integer n, return true if it is a power of three. Otherwise, return false.

  An integer n is a power of three, if there exists an integer x such that n == 3x.
  Example
  Input: n = 27
  Output: true
  Explanation: 27 = 33
  Input: n = 0
  Output: false
  Explanation: There is no x where 3x = 0.
`,
  "\x1b[0m"
);

export const isPowerOfThree: any = (arg: any) => {
  let n: number;
  if (Array.isArray(arg)) {
    n = Number(arg[0]);
  } else {
    n = arg;
  }

  if (n === 0) return false;
  if (n === 1) return true;
  // I do it recursively until n is 0 or not
  if (n % 3 === 0) return isPowerOfThree(n / 3);
  return false;
};
