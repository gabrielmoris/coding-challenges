console.log(
  "\x1b[44m",
  "\x1b[33m",
  `
  There's a staircase with N steps, and you can climb 1 or 2 steps at a time. Given N, write a function that returns the number of unique ways you can climb the staircase. The order of the steps matters.
  For example, if N is 4, then there are 5 unique ways:

  1, 1, 1, 1
  
  2, 1, 1
  
  1, 2, 1
  
  1, 1, 2
  
  2, 2
  
  What if, instead of being able to climb 1 or 2 steps at a time, you could climb any number from a set of positive integers X? For example, if X = {1, 3, 5}, you could climb 1, 3, or 5 steps at a time. Generalize your function to take in X.
  `,
  "\x1b[0m"
);

export const staircase: any = ({ n }: any) => {
  // It's always good to start off with some test cases. Let's start with small cases and see if we can find some sort of pattern.
  // N = 1: [1]
  // N = 2: [1, 1], [2]
  // N = 3: [1, 2], [1, 1, 1], [2, 1]
  // N = 4: [1, 1, 2], [2, 2], [1, 2, 1], [1, 1, 1, 1], [2, 1, 1]
  //* What's the relationship?
  //* The only ways to get to N = 3, is to first get to N = 1,
  // and then go up by 2 steps, or get to N = 2 and go up by 1 step. So f(3) = f(2) + f(1).
  //* Does this hold for N = 4? Yes, it does. Since we can only get to the 4th step by getting to the 3rd step and going up by one,
  // or by getting to the 2nd step and going up by two. So f(4) = f(3) + f(2).
  if (n <= 1) return 1;
  return staircase({ n: n - 1 }) + staircase({ n: n - 2 });
};
