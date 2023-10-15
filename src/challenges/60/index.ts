console.log(
  "\x1b[44m",
  "\x1b[33m",
  `
  Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.

Note that the same word in the dictionary may be reused multiple times in the segmentation.

 

Example 1:

Input: s = "leetcode", wordDict = ["leet","code"]
Output: true
Explanation: Return true because "leetcode" can be segmented as "leet code".
Example 2:

Input: s = "applepenapple", wordDict = ["apple","pen"]
Output: true
Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
Note that you are allowed to reuse a dictionary word.
Example 3:

Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
Output: false
  https://leetcode.com/problems/word-break/
    `,
  "\x1b[0m"
);

export const wordBreak = ({ s }: { s: string }, { wordDict }: { wordDict: string[] }) => {
  console.log(s, wordDict);
};
