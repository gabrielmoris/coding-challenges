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

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export const mergeTwoLists: SolutionFunction = (
  nodeList1: any | null,
  nodeList2: any
) => {
  // I try to parse the list or I return an empty object
  let list1;
  let list2;

  try {
    list1 = JSON.parse(nodeList1);
  } catch {
    list1 = list1;
  }
  try {
    list2 = JSON.parse(nodeList2);
  } catch {
    list2 = list2;
  }

  // I create a new empty node and I asign the head to it

  if (list1 === undefined && list2 === undefined) {
    return new ListNode();
  }

  if (list1 === undefined) {
    return list2;
  }

  if (list2 === undefined) {
    return list1;
  }

  // It will start with the listnode with value 0, but I just will return the Next
  let newList = new ListNode();
  let newListHead = newList;

  while (list1 != null && list2 != null) {
    // First: if val of list1 is smaller than list2
    if (list1.val < list2.val) {
      //I assing the next to the value of the list 1
      newList.next = new ListNode(list1.val);
      // I pass to the next item in linked list
      list1 = list1.next;
    } else {
      // If list2.val is smaller I create a new node and I assign the next to this node
      newList.next = new ListNode(list2.val);
      // I pass to the next item in linked list
      list2 = list2.next;
    }
    // I pass to the next item in result linked list
    newList = newList.next;
  }

  newList.next = list1 || list2;
  return JSON.stringify(newListHead.next);
};
