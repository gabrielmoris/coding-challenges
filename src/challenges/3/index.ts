export const zerosToEnd = ({ nums }: { nums: number[] }): any => {
  console.log(
    "\x1b[44m",
    "\x1b[33m",
    "Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.",
    "\n",
    "Note that you must do this in-place without making a copy of the array.",
    "\x1b[0m"
  );

  let left = 0;
  for (let i = 0; i < nums.length; i++) {
    console.log("left:", left, "i:", i);
    console.log("NUMBERSOFARR:", nums[left], nums[i]);
    if (nums[i] !== 0) {
      console.log("BEFORE", i, nums);
      // 1 [ 0, 1, 0, 3, 12 ] the nums[0] is changed by nums[1]
      // 3 [ 1, 0, 0, 3, 12 ] the nums[1] is changed for nums[3]
      // 4 [ 1, 3, 0, 0, 12 ] the nums[2] is changed for nums[4]
      [nums[i], nums[left]] = [nums[left], nums[i]];
      console.log("AFTER", i, nums);
      left++;
    }
  }
  return nums;
};
