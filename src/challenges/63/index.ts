console.log(
  "\x1b[44m",
  "\x1b[33m",
  `
Implement a function that performs an insertion sort. 
The function should take in an array of integers and return an array with the integers sorted in ascending order. 
The input array is modified. 
https://www.greatfrontend.com/questions/javascript/insertion-sort?list=data-structures-algorithms
  `,
  "\x1b[0m"
);

export default function insertionSort({ arr }: { arr: Array<number> }): Array<number> {
  if (arr.length <= 1) {
    return arr;
  }
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let indexBefore = i - 1;
    while (indexBefore >= 0 && current < arr[indexBefore]) {
      arr[indexBefore + 1] = arr[indexBefore];
      indexBefore--;
    }
    arr[indexBefore + 1] = current;
  }
  return arr;
}
