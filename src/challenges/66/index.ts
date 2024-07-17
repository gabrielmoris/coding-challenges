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
  const sizeOfParent = arr.length;

  /*Convert into a MAx-heap structure [ 11, 3, 9, 2, 1, 6 ]
         11
       /    \
      3      9
     / \    /
    2   1  6
*/
  for (let i = Math.floor(sizeOfParent / 2 - 1); i >= 0; i--) {
    heapify(arr, sizeOfParent, i);
  }

  // Extracting Sorted Elements
  for (let i = sizeOfParent - 1; i >= 0; i--) {
    // The Biggest number is swapped to the end
    [arr[0], arr[i]] = [arr[i], arr[0]];
    // Heaps again with reduced size to ensure the rest elements follow the max-heap property
    heapify(arr, i);
  }

  return arr;
}

// Function to Heapify

function heapify(arr: number[], size: number, indexFromParent: number = 0) {
  let highest = indexFromParent;
  const leftChildIndex = 2 * indexFromParent + 1;
  const rightChildIndex = 2 * indexFromParent + 2;

  if (leftChildIndex < size && arr[leftChildIndex] > arr[highest]) {
    highest = leftChildIndex;
  }

  if (rightChildIndex < size && arr[rightChildIndex] > arr[highest]) {
    highest = rightChildIndex;
  }

  if (highest != indexFromParent) {
    [arr[indexFromParent], arr[highest]] = [arr[highest], arr[indexFromParent]];
    heapify(arr, size, highest);
  }
}
