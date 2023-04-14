import { SolutionFunction } from "../..";

console.log(
  "\x1b[44m",
  "\x1b[33m",
  `Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.`,
  "\x1b[0m"
);

//More performant, recursive function
export const missingNumber: SolutionFunction = (numsArr: any[]): any => {
  const nums = numsArr.map((str) => Number(str));
  // Remember that the numbers are not really sorted!
  nums.sort(function (a, b) {
    return a - b;
  });
  if (nums.length === 1) {
    return nums[0] === 0 ? 1 : 0;
  }

  const resArr = nums.filter((num, i) => {
    return num != i;
  });

  if (!resArr.length) {
    return nums.length;
  }

  if (!Number.isNaN(resArr[0] - 1)) {
    return resArr[0] - 1;
  }
};
