export const containsDuplicate = ({ nums }: { nums: number[] }): any => {
  console.log(
    "\x1b[44m",
    "\x1b[33m",
    "Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.",
    "\n",
    "\x1b[0m"
  );

  let result = false;
  const map = new Map();

  nums.forEach((number) => {
    if (map.get(number) === undefined) {
      map.set(number, 1);
    } else {
      console.log(map);
      result = true;
    }
  });

  return result;
};
