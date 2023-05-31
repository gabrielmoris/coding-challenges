import { SolutionFunction } from "../..";

console.log(
  "\x1b[44m",
  "\x1b[33m",
  `Write an algorithm to determine if a number n is happy.

  A happy number is a number defined by the following process:
  
  Starting with any positive integer, replace the number by the sum of the squares of its digits.
  Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
  Those numbers for which this process ends in 1 are happy.
  Return true if n is a happy number, and false if not.

  Input: n = 19
Output: true
Explanation:
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1
   `,
  "\x1b[0m"
);

export const isHappy: SolutionFunction = (arg: any) => {
  let n = typeof arg === "object" ? arg[0] : arg;
  // This works but It is supossed that n is always a Number. Chack it
  try {
    while (n.length > 1) {
      const arrOfDigits = n
        .split("")
        .map((i: string) => Math.pow(Number(i), 2))
        .reduce((partialSum: number, a: number) => partialSum + a, 0)
        .toString();
      n = arrOfDigits;
    }
  } catch (e) {
    return false;
  }
  if (n == "1") {
    return true;
  } else {
    return false;
  }
};
