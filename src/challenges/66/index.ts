console.log(
  "\x1b[44m",
  "\x1b[33m",
  `
Implement a function that performs a heap sort. 
The function should take in an array of integers and return an array with the integers sorted in ascending order. 
The input array is modified in-place.  
https://www.greatfrontend.com/questions/javascript/heap-sort?list=data-structures-algorithms
  `,
  "\x1b[0m"
);

export default function heapSort(arrArg: {
  default: Array<number>;
}): Array<number> {
  const arr = arrArg.default;

  return arr;
}
