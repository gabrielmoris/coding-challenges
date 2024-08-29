console.log(
  "\x1b[44m",
  "\x1b[33m",
  `
  Given the head of a singly linked list, return true if it is a 
  palindrome or false otherwise.

   Input: head = [1,2,2,1]
Output: true
`,
  "\x1b[0m"
);

export const isPalindrome = ({ head }: { head: any }) => {
  const arr = [];

  while (head) {
    arr.push(head.value);
    head = head.next;
  }

  const arr1 = arr.slice(0, arr.length / 2);
  const arr2 =
    arr.length % 2 === 0
      ? arr.slice(arr.length / 2, arr.length)
      : arr.slice(arr.length / 2 + 1, arr.length);
  const res = JSON.stringify(arr1) === JSON.stringify(arr2.reverse());
  return res;
};
