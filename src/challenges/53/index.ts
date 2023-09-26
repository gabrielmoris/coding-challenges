console.log(
  "\x1b[44m",
  "\x1b[33m",
  `
  Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

  An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.
  
   
  
  Example 1:
  
  Input: grid = [
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
  ]
  Output: 1

     `,
  "\x1b[0m"
);
// If I find a ! it is a island, and then recursively I mark all the 1s in a row as visited.
// Then I go to the next step in the nexted for loop to check if there is another 1
export const numIslands = ({ grid }: any) => {
  let numberOfIslands = 0;
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      if (grid[row][col] === "1") {
        numberOfIslands++;
        visitAdjacentRecursively(grid, row, col);
      }
    }
  }
  return numberOfIslands;
};

const visitAdjacentRecursively = (grid: any, row: number, col: number) => {
  grid[row][col] = "visited";

  if (grid[row][col + 1] === "1") visitAdjacentRecursively(grid, row, col + 1);
  if (grid[row + 1]?.[col] === "1") visitAdjacentRecursively(grid, row + 1, col);
  if (grid[row][col - 1] === "1") visitAdjacentRecursively(grid, row, col - 1);
  if (grid[row - 1]?.[col] === "1") visitAdjacentRecursively(grid, row - 1, col);
};
