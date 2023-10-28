console.log(
  "\x1b[44m",
  "\x1b[33m",
  `Given an integer numRows, return the first numRows of Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
`,
  "\x1b[0m"
);

export const generate = ({ numRows }: { numRows: number }): number[][] => {
  let i = 0;
  const arrSol: number[][] = [];

  while (numRows > i) {
    if (i === 0) {
      arrSol.push([1]);
    } else if (i === 1) {
      arrSol.push([1, 1]);
    } else {
      if (arrSol[i - 1]) {
        const currArr = [];
        for (let y = 0; y < arrSol[i - 1].length; y++) {
          if (y === 0 || y === arrSol[i - 1].length - 1) {
            currArr.push(1);
          }
          if (arrSol[i - 1][y + 1]) {
            currArr.push(arrSol[i - 1][y] + arrSol[i - 1][y + 1]);
          }
        }

        arrSol[i] = currArr;
      }
    }

    i++;
  }

  return arrSol;
};

// Other Option

// export const generate: SolutionFunction = (arg: string[]): number[][] => {
//   const numRows = Number(arg[0]);
//   let result: number[][] = Array.from(Array(numRows), () => []);
//   let p1 = 0,
//     p2 = 0;
//   let i = 0;

//   result[0][0] = 1;

//   while (i < numRows - 1) {
//     if (p1 === p2) {
//       result[i + 1].push(result[i][p1]);
//       p2++;
//     } else if (!result[i][p2]) {
//       result[i + 1].push(result[i][p1]);
//       i++;
//       p2 = 0;
//       p1 = 0;
//     } else {
//       result[i + 1].push(result[i][p1] + result[i][p2]);
//       p2++;
//       p1++;
//     }
//   }

//   return result;
// };
