import { log } from "console";
import { SolutionFunction } from "../..";

console.log(
  "\x1b[44m",
  "\x1b[33m",
  `You are given the heads of two sorted linked lists list1 and list2.
  Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
  Return the head of the merged linked list.
  ---
  The number of nodes in both lists is in the range [0, 50].
  -100 <= Node.val <= 100
  Both list1 and list2 are sorted in non-decreasing order.
   `,
  "\x1b[0m"
);

export const mergeTwoLists: SolutionFunction = (
  list1: any | null,
  list2: any
) => {
  // I try to parse the list or I return an empty object
  let parsedList1;
  let parsedList2;

  try {
    parsedList1 = JSON.parse(list1);
  } catch {
    parsedList1 = {};
  }
  try {
    parsedList2 = JSON.parse(list2);
  } catch {
    parsedList2 = {};
  }
  //  I handle edge cases
  if (!parsedList1.val || !parsedList2.val) {
    const res = parsedList1.val
      ? parsedList1
      : parsedList2.val
      ? parsedList2
      : {};
    return res;
  }
  let result;
  let tail;
  while (parsedList1.next != null && parsedList2.next != null) {
    // Finish this
    // result = { value: parsedList1.next.value, next: tail };
    // tail = result;
    // parsedList1 = parsedList1.next;
  }
};
