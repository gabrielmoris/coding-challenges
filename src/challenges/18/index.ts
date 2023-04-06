import { SolutionFunction } from "../..";

console.log(
  "\x1b[44m",
  "\x1b[33m",
  `Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1`,
  "\x1b[0m"
);
// Funciona, pero debería buscar hacerlo en O1. Es posible?
export const firstUniqChar: SolutionFunction = (str: string[]): any => {
  const s: string = str[0];
  const charsMapper: { [key: string]: number } = {};
  for (const c of [...s]) {
    charsMapper[c] = charsMapper[c] ? charsMapper[c] + 1 : 1;
  }

  for (let i = 0; i < s.length; i++) {
    if (charsMapper[s[i]] === 1) return i;
  }
  return -1;
};
