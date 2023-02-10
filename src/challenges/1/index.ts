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
    const currentVal = nums[i];
    const complementary = nums[i] - sum;
    const complementaryRev = sum - nums[i];

    if (
      nums.indexOf(currentVal) < 0 &&
      nums.indexOf(currentVal) !== -1 &&
      nums.indexOf(complementary) !== -1 &&
      nums.indexOf(currentVal) != nums.indexOf(complementary)
    )
      return [nums.indexOf(currentVal), nums.indexOf(complementary)];
    if (
      nums.indexOf(currentVal) > 0 &&
      nums.indexOf(currentVal) !== -1 &&
      nums.indexOf(complementaryRev) !== -1 &&
      nums.indexOf(currentVal) != nums.indexOf(complementaryRev)
    )
      return [nums.indexOf(currentVal), nums.indexOf(complementaryRev)];
  }

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
