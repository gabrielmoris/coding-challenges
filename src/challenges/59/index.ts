console.log(
  "\x1b[44m",
  "\x1b[33m",
  `
  Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.
     
  https://leetcode.com/problems/trapping-rain-water/
    `,
  "\x1b[0m"
);

export const trap = ({ height }: { height: number[] }) => {
  let left = 0;
  let right = height.length - 1;
  let trappedWater = 0;
  let leftMaxHegith = 0;
  let rightMaxHegith = 0;

  while (left <= right) {
    if (height[left] < height[right]) {
      if (height[left] > leftMaxHegith) {
        leftMaxHegith = height[left];
      } else {
        trappedWater += leftMaxHegith - height[left];
      }
      left++;
    } else {
      if (height[right] > rightMaxHegith) {
        rightMaxHegith = height[right];
      } else {
        trappedWater += rightMaxHegith - height[right];
      }
      right--;
    }
  }
  return trappedWater;
};
