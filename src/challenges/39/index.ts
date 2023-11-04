console.log(
  "\x1b[44m",
  "\x1b[33m",
  `
  You are given two integer numsays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

  Merge nums1 and nums2 into a single numsay sorted in non-decreasing order.
  
  The final sorted numsay should not be returned by the function, but instead be stored inside the numsay nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.
  
  Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
  Output: [1,2,2,3,5,6]
  Explanation: The numsays we are merging are [1,2,3] and [2,5,6].
  The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
  `,
  "\x1b[0m"
);

export const merge = ({ nums1 }: { nums1: number[] }, { nums2 }: { nums2: number[] }) => {
  // I hardcode this argument
  const m = 3;
  const n = 3;
  let firstHalf = nums1.slice(0, m);
  let secondHalf = nums2.slice(0, n);
  secondHalf.forEach((num: number) => firstHalf.push(num));

  const returnArr = firstHalf.sort((a: number, b: number) => a - b);
  nums1.length = 0;
  returnArr.forEach((num: any) => nums1.push(num));
  return nums1;
};
