export const rotateNums = ({ nums }: { nums: number[] }, { k }: { k: number }): any => {
  console.log(
    "\x1b[44m",
    "\x1b[33m",
    "Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.",
    "\n",
    "It must be the argument modifyed and not send a new variable",
    "\x1b[0m"
  );

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
