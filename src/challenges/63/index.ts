console.log(
  "\x1b[44m",
  "\x1b[33m",
  `
  Write a function that implements the breadth-first search (BFS) algorithm on a directed graph (in adjacency list format), given a starting node.
  https://www.greatfrontend.com/questions/javascript/breadth-first-search?list=data-structures-algorithms
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
