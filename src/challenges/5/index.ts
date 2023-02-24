import { TIMEOUT } from "dns";
import { SolutionFunction } from "../..";
export const containsDuplicate: SolutionFunction = (arrOfStr, steps): any => {
  console.log(
    "\x1b[44m",
    "\x1b[33m",
    "Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.",
    "\n",
    "It must be the argument modifyed and not send a new variable",
    "\x1b[0m"
  );
  const nums = arrOfStr.map(toNumber);
  let k = Number(steps[0]);

  if (k <= 0) {
    return nums;
  }

  let tmp: any = 0;

  for (let i = 0; i < k; i++) {
    tmp = nums.pop();
    nums.unshift(tmp);
  }
  return nums;
};

function toNumber(value: string) {
  return Number(value);
}
