import { SolutionFunction } from "../..";

console.log(
  "\x1b[44m",
  "\x1b[33m",
  "Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.",
  "\n",
  `Symbol       Value
  I             1
  V             5
  X             10
  L             50
  C             100
  D             500
  M             1000`,
  "\n",
  `Roman numerals are usually written largest to smallest from left to right. However, 
  the numeral for four is not IIII. Instead, the number four is written as IV. Because 
  the one is before the five we subtract it making four. The same principle applies to 
  the number nine, which is written as IX. There are six instances where subtraction is used`,
  `Input: s = "III"
  Output: 3
  Explanation: III = 3.`,
  "\x1b[0m"
);

export const romanToInt: SolutionFunction = (input: string[]): any => {
  let nums: number[] = [];
  input[0].split("").forEach((item) => {
    switch (item) {
      case "I":
        nums.push(1);
        break;
      case "V":
        nums.push(5);
        break;
      case "X":
        nums.push(10);
        break;
      case "L":
        nums.push(50);
        break;
      case "C":
        nums.push(100);
        break;
      case "D":
        nums.push(500);
        break;
      case "M":
        nums.push(1000);
        break;
    }
  });

  // ADD CASSES LIKE III OR VII (in else)
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    console.log(i, "   ", result);
    if (nums[i] > nums[i + 1]) {
      result += nums[i];
    } else {
      const rest = nums[i + 1] - nums[i];
      result += rest;
      i++;
    }
  }
  return result;
};
