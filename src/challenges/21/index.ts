console.log(
  "\x1b[44m",
  "\x1b[33m",
  `Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.
  https://leetcode.com/problems/intersection-of-two-arrays-ii/`,

  "\x1b[0m"
);

//More performant, recursive function
export const missingNumber = ({ nums1 }: { nums1: number[] }, { nums2 }: { nums2: number[] }): any => {
  const result: any[] = [];
  if (nums1 < nums2) {
    nums1.forEach((item) => {
      if (nums2.includes(item)) {
        result.push(item);
        const index = nums2.indexOf(item);
        nums2.splice(index, 1);
      }
    });
  } else {
    nums2.forEach((item) => {
      if (nums1.includes(item)) {
        result.push(item);
        const index = nums1.indexOf(item);
        nums1.splice(index, 1);
      }
    });
  }
  return result;
};
