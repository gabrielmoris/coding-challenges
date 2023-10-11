console.log(
  "\x1b[44m",
  "\x1b[33m",
  `
  Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

 

  Example 1:
  
  Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
  Output: [[1,6],[8,10],[15,18]]
  Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
  Example 2:
  
  Input: intervals = [[1,4],[4,5]]
  Output: [[1,5]]
  Explanation: Intervals [1,4] and [4,5] are considered overlapping.
  https://leetcode.com/problems/merge-intervals/
   
  `,
  "\x1b[0m"
);

// Intuition
// The problem requires merging overlapping intervals. We can approach this by first sorting the intervals based on their start times.
// This allows us to merge intervals efficiently.

// Approach
// The approach involves sorting the intervals based on their start times. Once the intervals are sorted,
// we iterate through them and merge any overlapping intervals. We maintain a temporary interval and update its start
// and end times as we encounter intervals that overlap with it. When we find an interval that doesn't overlap, we add
// the merged interval to the result. Finally, we return the merged intervals.

// Complexity
// Time complexity: The time complexity of this approach is O(n log n), where n is the number of intervals.
// This is because we sort the intervals initially, which takes O(n log n) time. Then, we iterate through the intervals
// once, which takes O(n) time. Therefore, the overall time complexity is dominated by the sorting step.

// Space complexity: The space complexity is O(n), where n is the number of intervals.
// This is because we store the merged intervals in the 'res' array, which can have a maximum size of n if all intervals are non-overlapping.

export const merge = ({ intervals }: { intervals: number[][] }): number[][] => {
  intervals.sort((a, b) => a[0] - b[0]);
  let res = [],
    n = intervals.length;

  for (let i = 0; i < n; i++) {
    let tmp = [intervals[i][0]],
      max = intervals[i][1];

    while (i < n && max >= intervals[i][0]) {
      if (intervals[i][0] < tmp[0]) tmp[0] = intervals[i][0];
      max = Math.max(intervals[i][1], max);
      i++;
    }
    tmp.push(max);
    res.push(tmp);
  }
  return res;
};
