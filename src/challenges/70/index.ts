console.log(
  "\x1b[44m",
  "\x1b[33m",
  `
Implement a function that performs a recursive quick sort. The function should take in an array of integers. The output should be an array with the input sorted in ascending order.

https://www.greatfrontend.com/questions/javascript/quick-sort?list=data-structures-algorithms
  `,
  "\x1b[0m"
);

export default function fnWrapper(arrArg: {
  default: Array<number>;
}): Array<number> {
  const arr = arrArg.default;

  return quickSort(arr);
}

const quickSort = (arr: Array<number>) => {
  return arr;
};
