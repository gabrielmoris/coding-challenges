import { SolutionFunction } from "../..";

console.log(
  "\x1b[44m",
  "\x1b[33m",
  `Given an integer numRows, return the first numRows of Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
`,
  "\x1b[0m"
);

export const generate: SolutionFunction = (arg: string[]): number[][] => {
  const numRows = Number(arg[0]);
  let i = 0;
  const arrSol = [];

  while (numRows > i) {
    if (i === 0) {
      arrSol.push([1]);
    } else if (i === 1) {
      arrSol.push([1, 1]);
    } else {
      // here i add as each number the numRows[i-1](1,2,1) added to the next one in the numRows[i](1 ,(1+2),(1+2),1) and the 1 i the corners
    }

    i++;
  }

  return arrSol;
};
