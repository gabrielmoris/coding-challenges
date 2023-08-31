import { reverse } from "./../49/index";
console.log(
  "\x1b[44m",
  "\x1b[33m",
  `
  Given a string s, find the length of the longest 
substring
 without repeating characters.

 

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

     `,
  "\x1b[0m"
);

export const lengthOfLongestSubstring = ([s]: string): number => {
  const arrOflongStrings: string[] = [];
  let stringToCheckLength = "";
  const arrFromString = s.split("");
  arrFromString.forEach((char) => {
    if (!stringToCheckLength.includes(char)) {
      stringToCheckLength = stringToCheckLength + char;
    } else {
      arrOflongStrings.push(stringToCheckLength);

      const match = stringToCheckLength.indexOf(char);
      stringToCheckLength = stringToCheckLength.substring(match);
    }
  });

  arrOflongStrings.push(stringToCheckLength);
  console.log(arrOflongStrings);
  arrOflongStrings.sort((a, b) => b.length - a.length);
  return arrOflongStrings[0].length;
};
