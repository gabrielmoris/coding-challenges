import { SolutionFunction } from "../..";

console.log(
  "\x1b[44m",
  "\x1b[33m",
  "Given two integers a and b, return the sum of the two integers without using the operators + and -.",
  "\n",
  "Input: a = 1, b = 2 \n Output: 3",
  "\x1b[0m"
);

export const getSum: SolutionFunction = (firstNum, secondNum): any => {
  const numA = Number(firstNum[0]);
  const numB = Number(secondNum[0]);
  console.log(numA, numB);
  return 1;
};
