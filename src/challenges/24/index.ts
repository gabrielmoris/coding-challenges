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
1² + 9² = 82
8² + 2² = 68
6² + 8² = 100
1² + 0² + 0² = 1
https://leetcode.com/problems/happy-number/
   `,
  "\x1b[0m"
);

export const isHappy = ({ n }: { n: string }) => {
  try {
    while (n.length > 1 || Number(n) > 4) {
      console.log(Number(n));

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
