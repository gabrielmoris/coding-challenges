import { SolutionFunction } from "../..";

export const solutionFn: SolutionFunction = (inputArray) => {
  inputArray.forEach((item) => console.log(item));
  return inputArray[1];
};
