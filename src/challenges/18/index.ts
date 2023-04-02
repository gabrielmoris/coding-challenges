import { SolutionFunction } from "../..";

console.log(
  "\x1b[44m",
  "\x1b[33m",
  `Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1`,
  "\x1b[0m"
);
// Funciona, pero debería buscar hacerlo en O1. Es posible?
export const firstUniqChar: SolutionFunction = (str: string[]): any => {
  const s = str[0].split("");
  let result = -1;
  const sCheck = s;
  s.forEach((char: string, i: any) => {
    console.log(sCheck, char, !sCheck.includes(char), i);
    if (!sCheck.includes(char)) {
      result = i;
      break;
    }
    sCheck.shift();
  });
  return result;
};
