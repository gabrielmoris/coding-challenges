import { reverse } from "./../49/index";
console.log(
  "\x1b[44m",
  "\x1b[33m",
  `
  You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

  You may assume the two numbers do not contain any leading zero, except the number 0 itself.

  Example 1:


Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
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

export const addTwoNumbers = (input1: string, input2: string) => {
  const l1 = JSON.parse(input1);
  const l2 = JSON.parse(input2);
  const numberl1 = linkListToReversedNumber(l1);
  const numberl2 = linkListToReversedNumber(l2);
  return reversedNumberToLinkLit(numberl1 + numberl2);
};

const linkListToReversedNumber = (linkedList: ListNode) => {
  let stringifiedNumber = "";
  let listHead: ListNode | null = linkedList;
  while (listHead) {
    stringifiedNumber = listHead.val + stringifiedNumber;
    listHead = listHead.next;
  }
  return Number(stringifiedNumber);
};

const reversedNumberToLinkLit = (number: number) => {
  const stringifiedReversedNumber = number.toString().split("").reverse();
  let linkedListSolution: ListNode = new ListNode();
  let currentNode = linkedListSolution;
  stringifiedReversedNumber.forEach((figure, index) => {
    currentNode.val = Number(figure);
    if (index < stringifiedReversedNumber.length - 1) {
      currentNode.next = new ListNode();
      currentNode = currentNode.next;
    }
  });
  return linkedListSolution;
};
