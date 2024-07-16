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
  graphArg: { default: { [key: string]: string } },
  sourceArg: { default: string }
): Array<string> {
  const graph: { [key: string]: string } = graphArg.default;
  const source: string = sourceArg.default;
  if (Object.keys(graph).length === 0) {
    return [];
  }

  let result = new Set();
  let notVisited = [source];

  while (notVisited.length) {
    const visiting = notVisited.pop();
    // console.log("ADDING TO RESULT: ", visiting);
    result.add(visiting);

    if (visiting != undefined) {
      const linkedNodes: [string] = graph[visiting] as unknown as [string];
      // console.log("TO VISIT: ", notVisited);

      for (let i = linkedNodes.length - 1; i >= 0; i--) {
        const node = linkedNodes[i];
        if (!result.has(node)) {
          notVisited.push(node);
          // console.log("PUSHING TO NOTVISITED:", node);
        }
      }
    }
  }

  return Array.from(result) as [string];
}
// ['A', 'B', 'E', 'D', 'I', 'J', 'F', 'C', 'G', 'H']
