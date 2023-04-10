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
  nums.sort();
  if (nums.length < 2) {
    //check what happens when the number is [0,1] or [1,2]...etc
    //This part would work
    //     if (nums[0] === 0) {
    //       return 1;
    //     } else {
    //       return 0;
    //     }
    //   }
    //this starts to be more complex, check it
    //   if (nums.length === 2) {
    //     if
    //     if (nums[1] === 2) {
    //       return 1;
    //     }
    //     if (nums[1] === 1) {
    //       return 2;
    //     }
  }
  const resArr = nums.filter((num, i) => {
    return num != i;
  });

  if (!Number.isNaN(resArr[0] - 1)) {
    return resArr[0] - 1;
  }
};
