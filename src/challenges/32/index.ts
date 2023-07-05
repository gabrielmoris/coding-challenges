import { SolutionFunction } from "../..";

console.log(
  "\x1b[44m",
  "\x1b[33m",
  `
  You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

  Increment the large integer by one and return the resulting array of digits.
  
  Input: digits = [1,2,3]
  Output: [1,2,4]

  Explanation: The array represents the integer 123.
  Incrementing by one gives 123 + 1 = 124.
  Thus, the result should be [1,2,4].

`,
  "\x1b[0m"
);

export const plusOne = (arr: string[]) => {
  // If I use Number Javascript cant handle It because it is too big. That is Why I have to use BigInt
  const number = BigInt(arr.join("")) + BigInt(1);

  return number
    .toString()
    .split("")
    .map((n: any) => Number(n));
};
