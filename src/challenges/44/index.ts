console.log(
  "\x1b[44m",
  "\x1b[33m",
  `
  Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

  You must not use any built-in exponent function or operator.
  
  For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.
   
  
  Example 1:
  
  Input: x = 4
  Output: 2
  Explanation: The square root of 4 is 2, so we return 2.
  Example 2:
  
  Input: x = 8
  Output: 2
  Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.
   `,
  "\x1b[0m"
);

export const call = (input: any) => {
  const x = input.map((x: any) => Number(x));
  x.forEach((number: number) => {
    console.log(number, ": ", mySqrt(number));
  });
};

const mySqrt = (x: number) => {
  let sqr = 1;

  while (sqr * sqr <= x) sqr++;
  return sqr - 1;
};
