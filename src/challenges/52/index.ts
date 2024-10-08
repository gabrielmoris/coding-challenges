console.log(
  "\x1b[44m",
  "\x1b[33m",
  `
  Given a string s, find the length of the longest substring without repeating characters.

 

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

export const lengthOfLongestSubstring = ({ s }: { s: string }): number => {
  if (!s) return 0;
  const arrOflongStrings: string[] = [];
  let stringToCheckLength = "";
  const arrFromString: string[] = s.split("");
  arrFromString.forEach((char) => {
    const ind = stringToCheckLength.indexOf(char);
    if (ind === -1) {
      stringToCheckLength += char;
      arrOflongStrings.push(stringToCheckLength);
    } else {
      stringToCheckLength = stringToCheckLength.slice(ind + 1).concat(char);
    }
  });

  arrOflongStrings.sort((a, b) => b.length - a.length);
  return arrOflongStrings[0].length;
};
