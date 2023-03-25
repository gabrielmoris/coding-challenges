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
  const str = input[0];
  // Interface of an object to compare
  const cifra: { [key: string]: number } = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let sum = 0;

  for (let i = 0; i < str.length; i++) {
    //Si i es menor que el tamaño del String y la cifra string1 es menor que la string2 = le resto a sum cifra[i]
    if (i + 1 < str.length && cifra[str[i]] < cifra[str[i + 1]]) {
      sum -= cifra[str[i]];
    } else {
      sum += cifra[str[i]];
    }
  }

  return sum;
};
