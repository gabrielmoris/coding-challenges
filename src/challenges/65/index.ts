console.log(
  "\x1b[44m",
  "\x1b[33m",
  `
  Write a function that implements the depth-first search algorithm on a directed graph (in adjacency list format), given a starting node.
  https://www.greatfrontend.com/questions/javascript/depth-first-search?list=data-structures-algorithms
  `,
  "\x1b[0m"
);
export default function depthFirstSearch(
  graph: Record<string, Array<string>>,
  source: string
): Array<string> {
  console.log("HERE", graph, source);
  return [""];
}
