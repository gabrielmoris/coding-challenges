export const singleNumber = ({ arrOfNumber }: { arrOfNumber: number[] }): number => {
  console.log(
    "\x1b[44m",
    "\x1b[33m",
    "Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.",
    "\n",
    "You must implement a solution with a linear runtime complexity and use only constant extra space.",
    "\x1b[0m"
  );

  const result = new Map();
  arrOfNumber.forEach((number) => {
    if (result.has(number)) {
      result.delete(number);
    } else {
      result.set(number, "ok");
    }
  });
  const number = [...result.keys()];

  return number[0];
};
