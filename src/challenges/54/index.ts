console.log(
  "\x1b[44m",
  "\x1b[33m",
  `
  Given a string s, return the longest palindromic substring in s.
  
  Example 1:
  
  Input: s = "babad"
  Output: "bab"
  Explanation: "aba" is also a valid answer.
  Example 2:
  
  Input: s = "cbbd"
  Output: "bb"`,
  "\x1b[0m"
);

export const longestPalindrome = ({ s }: { s: string }) => {
  if (s.length <= 1) {
    return s;
  }
  const arrSol = [];
  for (let i = 0; i < s.length - 1; i++) {
    // I check depending of:
    //1: There is no char in the middle and is completelly mirror (abba)
    arrSol.push(checkPalFromThisChar(i, i, s));
    // 2: there is a char in the middle (abcba)
    arrSol.push(checkPalFromThisChar(i, i + 1, s));
  }

  const possibleSolutions = arrSol.sort((a, b) => {
    return b.length - a.length;
  });
  // console.log(possibleSolutions);
  return possibleSolutions[0];
};

const checkPalFromThisChar = (left: number, right: number, string: string): string => {
  while (left >= 0 && right <= string.length - 1 && string[left] === string[right]) {
    left--;
    right++;
  }
  // console.log(left, right);
  return string.substring(left + 1, right);
};
