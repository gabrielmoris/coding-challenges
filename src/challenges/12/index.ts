import { SolutionFunction } from "../..";
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

console.log(
  "\x1b[44m",
  "\x1b[33m",
  "Given the head of a singly linked list, reverse the list, and return the reversed list.",
  "\n",
  "Input: head = [1,2,3,4,5] \n Output: [5,4,3,2,1]",
  "\x1b[0m"
);

export const reverseList: SolutionFunction = (head: any): any => {
  let parsedList = JSON.parse(head);
  // First I sabe what is in head, I put the head in result putting next as null and saving next in a variable
  //Then I iterate asigning the next as head and puting it as the parent in result
  if (head === null || head.next === null) {
    return head;
  }

  let tail: { value: number; next: any } = {
    value: parsedList.value,
    next: null,
  };
  let result;
  while (parsedList.next != null) {
    result = { value: parsedList.next.value, next: tail };
    tail = result;
    parsedList = parsedList.next;
  }
  return JSON.stringify(result);
};
