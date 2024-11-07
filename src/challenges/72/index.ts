console.log(
  "\x1b[44m",
  "\x1b[33m",
  `
Implement a function that performs a topological sort on a directed graph (in adjacency list format), where the keys represent nodes and values are an array of nodes that have an outgoing edge to the current node.

https://www.greatfrontend.com/questions/javascript/topological-sort?list=data-structures-algorithms
  `,
  "\x1b[0m"
);

// MAIN
export default function fnWrapper(
  { default: arr1 }: { default: [] },
  { default: arr2 }: { default: [] }
): Array<number> {
  // const sorted = [...arr1, ...arr2].sort((a, b) => a - b); // O(n log n)

  // To have a more time performant solution: O(n)
  const sorted: number[] = [];

  let i = 0,
    j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      sorted.push(arr1[i]);
      i++;
    } else if (arr2[j] < arr1[i]) {
      sorted.push(arr2[j]);
      j++;
    } else {
      // If they are ===
      sorted.push(arr1[i], arr2[j]);
      i++;
      j++;
    }
  }

  // Add any remaining elements from arr1
  while (i < arr1.length) {
    sorted.push(arr1[i]);
    i++;
  }

  // Add any remaining elements from arr2
  while (j < arr2.length) {
    sorted.push(arr2[j]);
    j++;
  }

  return sorted;
}
