import { SolutionFunction } from "../..";

// return index of arrays which sum are The target
export const solutionFn: SolutionFunction = (inputArray, target) => {
  console.log(
    "\x1b[44m",
    "\x1b[33m",
    "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
    "\n",
    "You may assume that each input would have exactly one solution, and you may not use the same element twice.",
    "\x1b[0m"
  );

  const map: { [key: string]: number } = {};

  for (let i = 0; i < inputArray.length; i++) {
    const sum = Number(target[0]);

    if (
      inputArray.indexOf(inputArray[i]) !== -1 &&
      inputArray.indexOf((Number(inputArray[i]) - sum).toString()) !== -1
    )
      return [
        inputArray.indexOf(inputArray[i]),
        inputArray.indexOf((Number(inputArray[i]) - sum).toString()),
      ];
  }

  return "No solution";
};
