import { SolutionFunction } from "../..";

export const biggestSubarr: SolutionFunction = (arrOfStr) => {
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

  // nums[i] represents the largest sum of all subarrays ending with index i...
  // then its value should be the larger one between nums[i]...
  // nums[i-1] + nums[i] (largest sum plus current number with using prefix)...
  // calculate nums[0], nums[1]…, nums[n] while comparing each one with current largest sum...

  ///////////////////
  // if nums[i] > maxSum then maxSum = nums[i]...

  return "finish it";
};

function toNumber(value: string) {
  return Number(value);
}
