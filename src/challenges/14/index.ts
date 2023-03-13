import { SolutionFunction } from "../..";

console.log(
  "\x1b[44m",
  "\x1b[33m",
  "Given an array nums of size n, return the majority element.",
  "\n",
  `The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.`,
  ` Could you solve the problem in linear time and in O(1) space?`,
  `Input: nums = [3,2,3]
  Output: 3`,
  "\x1b[0m"
);

export const majorityElement: SolutionFunction = (input: string[]): number => {
  const nums = input.map(toNumber);
  if (nums.length <= 2) {
    return nums[0];
  }

  // I have to remember that the number will appear at leas n/2 of the array, which makes things easy
  const order = nums.sort();
  return order[Math.floor(nums.length / 2)]; //O(1)
};

function toNumber(value: string) {
  return Number(value);
}
