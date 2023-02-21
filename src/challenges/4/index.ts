import { SolutionFunction } from "../..";
export const zerosToEnd: SolutionFunction = (arrOfStr): any => {
  console.log(
    "\x1b[44m",
    "\x1b[33m",
    "Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.",
    "\n",
    "\x1b[0m"
  );

  // WORKS BUT IT IS O(N2)
  const nums = arrOfStr.map(toNumber);
  let result = false;
  nums.forEach((number) => {
    const repeated = indexOfAll(nums, number);
    console.log("repeated", repeated.length, repeated.length > 1);
    if (repeated.length > 1) {
      result = true;
    }
  });

  return result;
};

function toNumber(value: string) {
  return Number(value);
}

const indexOfAll = (arr: number[], val: number): number[] => {
  const result: number[] = [];
  arr.forEach((num, index) => {
    num === val ? result.push(index) : null;
  });
  return result;
};
