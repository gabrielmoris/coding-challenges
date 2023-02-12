import { SolutionFunction } from "../..";

// This code is an implementation of the divide and conquer
// approach to finding the subarray with the largest sum in an array of integers.
// It iterates through the array, adding the current number to the previous number
// if it is bigger than 0, and updating the maxSum if the current number is bigger than the sum. Finally, it returns the maxSum.

export const biggestSubarr: SolutionFunction = (arrOfStr): number => {
  console.log(
    "\x1b[44m",
    "\x1b[33m",
    "Given an integer array nums, find the subarray with the largest sum, and return its sum.",
    "\n",
    " solution using the divide and conquer approach.",
    "\x1b[0m"
  );
  const nums = arrOfStr.map(toNumber);

  let maxSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    //if the former number is bigger than 0 it is added
    nums[i] = Math.max(0, nums[i - 1]) + nums[i];

    // if the current number is bigger than the sum the max sum will be that number
    if (nums[i] > maxSum) maxSum = nums[i];
  }

  return maxSum;
};

function toNumber(value: string) {
  return Number(value);
}
