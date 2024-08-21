console.log(
  "\x1b[44m",
  "\x1b[33m",
  `
IImplement a function that performs a recursive merge sort. The function should be recursive and takes in an array of integers. The output should be an array with the input sorted in ascending order.

https://www.greatfrontend.com/questions/javascript/merge-sort?list=data-structures-algorithms
  `,
  "\x1b[0m"
);

export default function fnWrapper(arrArg: {
  default: Array<number>;
}): Array<number> {
  const arr = arrArg.default;

  return recursiveMergeSort(arr);
}

// Split recursively the array and merge the parts
function recursiveMergeSort(arr: Array<number>): Array<number> {
  if (arr.length < 2) {
    return arr;
  }

  const half = Math.floor(arr.length / 2);
  const right = arr.slice(0, half);
  const left = arr.slice(half);

  const sortRight = recursiveMergeSort(right);
  const sortLeft = recursiveMergeSort(left);

  return merger(sortLeft, sortRight);
}

// Merge the arrays that I become and order them
function merger(arr1: number[], arr2: number[]): Array<number> {
  const mergedArr: number[] = [];
  let arr1Pos = 0;
  let arr2Pos = 0;

  while (arr1Pos < arr1.length && arr2Pos < arr2.length) {
    if (arr1[arr1Pos] < arr2[arr2Pos]) {
      mergedArr.push(arr1[arr1Pos]);
      arr1Pos++;
    } else {
      mergedArr.push(arr2[arr2Pos]);
      arr2Pos++;
    }
  }

  mergedArr.push(...arr1.slice(arr1Pos), ...arr2.slice(arr2Pos)); // add the rests

  return mergedArr;
}
