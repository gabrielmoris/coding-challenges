console.log(
  "\x1b[44m",
  "\x1b[33m",
  `
  Write a function to find the longest common prefix string amongst an array of strings.

  If there is no common prefix, return an empty string "".
  
   
  
  Example 1:
  
  Input: strs = ["flower","flow","flight"]
  Output: "fl"
  Example 2:
  
  Input: strs = ["dog","racecar","car"]
  Output: ""
  Explanation: There is no common prefix among the input strings.
    `,
  "\x1b[0m"
);

export const longestCommonPrefix = (strs: string[]) => {
  let prefix = strs[0];

  strs.forEach((str) => {
    prefix = compareStrings(str, prefix);
  });

  return prefix;
};

const compareStrings = (string1: string, string2: string): string => {
  let stringReturn = "";
  for (let i = 0; i < string2.length; i++) {
    if (string1[0] !== string2[0]) {
      stringReturn = "";
      break;
    }
    if (string1[i] === string2[i]) {
      stringReturn += string1[i];
    } else {
      break;
    }
  }
  return stringReturn;
};
