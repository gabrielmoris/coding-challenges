console.log(
  "\x1b[44m",
  "\x1b[33m",
  `
  Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

  Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
  
   
  Example 1:
  
  Input: x = 123
  Output: 321
  Example 2:
  
  Input: x = -123
  Output: -321
  Example 3:
  
  Input: x = 120
  Output: 21  
  
     `,
  "\x1b[0m"
);

export const reverse = ([number]: string): number => {
  const x = Number(number);
  // 32-bit int min-max range
  const MIN = -2147483648;
  const MAX = 2147483647;

  // if it is less than 32 bit
  if (x > 0) {
    const stringifiedNumber = x.toString();
    const solution = Number(stringifiedNumber.split("").reverse().join(""));
    if (solution > MAX) {
      return 0;
    } else {
      return solution;
    }
  } else {
    const stringifiedNumber = x.toString();
    const positivestringifiedNumber = stringifiedNumber.substring(
      1,
      stringifiedNumber.length
    );

    const solution = Number(
      +positivestringifiedNumber.split("").reverse().join("")
    );
    if (-solution < MIN) {
      return 0;
    } else {
      return -solution;
    }
  }
};
