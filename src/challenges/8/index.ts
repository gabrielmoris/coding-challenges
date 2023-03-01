import { SolutionFunction } from "../..";
export const fizzbuzz: SolutionFunction = (
  arrOfStr: string[]
): string[] | string => {
  console.log(
    "\x1b[44m",
    "\x1b[33m",
    "Given an integer n, return a string array answer (1-indexed) where:",
    "\n",
    "answer[i] == 'FizzBuzz' if i is divisible by 3 and 5.",
    "\n",
    "answer[i] == 'Fizz' if i is divisible by 3.",
    "\n",
    "answer[i] == 'Buzz' if i is divisible by 5.",
    "\n",
    "answer[i] == i (as a string) if none of the above conditions are true.",
    "\x1b[0m"
  );
  const nums = arrOfStr.map(toNumber);

  let number = nums[0];
  const response = [];

  if (number <= 1) {
    response.push(number.toString());
  } else {
    for (let i = 1; i <= number; i++) {
      i % 3 === 0 && i % 5 === 0
        ? response.push("Fizzbuzz")
        : i % 5 === 0
        ? response.push("Buzz")
        : i % 3 === 0
        ? response.push("Fizz")
        : response.push(i.toString());
    }
  }

  return response;
};

function toNumber(value: string) {
  return Number(value);
}
