console.log(
  "\x1b[44m",
  "\x1b[33m",
  `
  A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

 

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
     `,
  "\x1b[0m"
);

export const isPalindrome = ([s]: string) => {
  const stringInLowercase = s
    .replaceAll(/[^a-zA-Z0-9]/g, "")
    .toLocaleLowerCase();
  if (stringInLowercase.length <= 1) {
    return true;
  }

  if (stringInLowercase.length === 2) {
    return stringInLowercase[0] === stringInLowercase[1];
  }

  if (stringInLowercase.length % 2 != 0) {
    return (
      stringInLowercase
        .substring(stringInLowercase.length / 2 + 1, stringInLowercase.length)
        .split("")
        .reverse()
        .join("") ===
      stringInLowercase.substring(0, stringInLowercase.length / 2)
    );
  } else {
    return (
      stringInLowercase
        .substring(stringInLowercase.length / 2, stringInLowercase.length)
        .split("")
        .reverse()
        .join("") ===
      stringInLowercase.substring(0, stringInLowercase.length / 2)
    );
  }
};
