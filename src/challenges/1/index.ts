import { SolutionFunction } from "../..";

export const solutionFn: SolutionFunction = (arrOfStr, target) => {
  console.log(
    "\x1b[44m",
    "\x1b[33m",
    "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
    "\n",
    "You may assume that each input would have exactly one solution, and you may not use the same element twice.",
    "\x1b[0m"
  );

  const nums = arrOfStr.map(toNumber);

  for (let i = 0; i < nums.length; i++) {
    const sum = Number(target);
    // I save in a Variable the current number I check in the array and his complementary to reach the target
    const currentVal = nums[i];
    const complementary = sum - nums[i];

    //I check if the complementary value is in the array and if the index of the current value is not the same as the complementary (to dont use the same number)
    if (
      nums.indexOf(complementary) !== -1 &&
      nums.indexOf(currentVal) != nums.indexOf(complementary)
    )
      return [nums.indexOf(currentVal), nums.indexOf(complementary)];
  }

  //In case the target is the double of 2 complementaries, I check the first 2 numbers
  if (nums.indexOf(target / 2) != -1) {
    const arrOfRes = indexOfAll(nums, target / 2);
    return [arrOfRes[0], arrOfRes[1]];
  }
  return "No solution";
};

const indexOfAll = (arr: number[], val: number): number[] => {
  const result: number[] = [];
  arr.forEach((num, index) => {
    num === val ? result.push(index) : null;
  });
  return result;
};

function toNumber(value: string) {
  return Number(value);
}
