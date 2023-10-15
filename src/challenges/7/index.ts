export const reverseString = ({ str }: { str: string[] }): string[] => {
  console.log(
    "\x1b[44m",
    "\x1b[33m",
    "Write a function that reverses a string. The input string is given as an array of characters",
    "\n",
    "You must do this by modifying the input array in-place with O(1) extra memory ",
    "\x1b[0m"
  );

  if (str.length <= 1) {
    return str;
  }

  //only from top-end to middle is length/2 I change each letter
  for (let i = 0; i < str.length / 2; i++) {
    const forwardLetter = i;
    const backwardsLetter = str.length - i - 1;
    if (str[forwardLetter] !== str[backwardsLetter]) {
      [str[forwardLetter], str[backwardsLetter]] = [str[backwardsLetter], str[forwardLetter]];
    }
  }
  if (!str[0]) {
    str.shift();
  }
  return str;
};
