console.log(
  "\x1b[44m",
  "\x1b[33m",
  `
  Write a function that implements the depth-first search algorithm on a directed graph (in adjacency list format), given a starting node.
  https://www.greatfrontend.com/questions/javascript/depth-first-search?list=data-structures-algorithms
  `,
  "\x1b[0m"
);
export default function depthFirstSearch(graphArg: { default: { [key: string]: string } }, sourceArg: { default: string }): Array<string> {
  const graph: { [key: string]: string } = graphArg.default;
  const source: string = sourceArg.default;
  if (Object.keys(graph).length === 0) {
    return [];
  }

  let result = new Set();
  let notVisited = [source];

  while (notVisited.length !== 0) {
    const visiting = notVisited.pop();
    result.add(visiting);

    if (visiting != undefined) {
      const linkedNodes: [string] = graph[visiting] as [string];

      linkedNodes.forEach((node) => {
        if (!result.has(node)) {
          result.add(node);
        }
      });
    }
  }

  return Array.from(result) as [string];
}
// ['A', 'B', 'E', 'D', 'I', 'J', 'F', 'C', 'G', 'H']