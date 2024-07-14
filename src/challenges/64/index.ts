console.log(
  "\x1b[44m",
  "\x1b[33m",
  `
  Implement a function that performs binary search on an array of numbers. The function should take in a sorted array of integers and a target integer to find.
  It returns the index of the target element or -1, if the target element doesn't exist in the array.
  https://www.greatfrontend.com/questions/javascript/binary-search?list=data-structures-algorithms
  `,
  "\x1b[0m"
);
/**
 * @param arr The input integer array to be searched.
 * @param target The target integer to search within the array.
 * @return The index of target element in the array, or -1 if not found.
 */
export default function binarySearch({ arr }: { arr: Array<number> }, { target }: { target: number }): number {
  let right: number = arr.length - 1;
  let left = 0;

  while (left <= right) {
    const center = Math.floor((left + right) / 2);

    if (target < arr[center]) {
      right = center - 1;
    } else if (target > arr[center]) {
      left = center + 1;
    } else {
      return center;
    }
  }
  return -1;
}
