import { exitCode } from "process";
import { SolutionFunction } from "../..";

console.log(
  "\x1b[44m",
  "\x1b[33m",
  "Given a string columnTitle that represents the column title as appears in an Excel sheet, return its corresponding column number.",
  "\n",
  `For example:
  A -> 1
  B -> 2
  C -> 3
  ...
  Z -> 26
  AA -> 27
  AB -> 28 
  ...`,
  "\x1b[0m"
);

export const titleToNumber: SolutionFunction = (input: string[]): number => {
  const columnTitle = input[0].toUpperCase();
  // A-Z luego AA-AZ luego BA-BZ etc... AAA sería 703
  if (columnTitle.length < 1) {
    return 0;
  }

  if (columnTitle.length === 1) {
    const lastCharVal = columnTitle.charCodeAt(columnTitle.length - 1) - 64;
    return lastCharVal;
  } else {
    let colSum = 0;
    for (let i = 0; i < columnTitle.length; i++) {
      colSum = 26 * colSum + columnTitle.charCodeAt(i) - 64;
      console.log(columnTitle[i], colSum);
    }

    return colSum;
  }
};

// ZZ is 702, so AAA should be 703
//expected output from FXSHRXW is 2147483647
