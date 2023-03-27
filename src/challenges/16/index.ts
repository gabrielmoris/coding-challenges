import { SolutionFunction } from "../..";

console.log(
  "\x1b[44m",
  "\x1b[33m",
  "Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.",
  "\n",
  `Symbol       Value
  I             1
  V             5
  X             10
  L             50
  C             100
  D             500
  M             1000`,
  "\n",
  `There is a singly-linked list head and we want to delete a node node in it.

  You are given the node to be deleted node. You will not be given access to the first node of head.
  
  All the values of the linked list are unique, and it is guaranteed that the given node node is not the last node in the linked list.
  
  Delete the given node. Note that by deleting the node, we do not mean removing it from memory. We mean:`,
  `The value of the given node should not exist in the linked list.
  The number of nodes in the linked list should decrease by one.
  All the values before node should be in the same order.
  All the values after node should be in the same order.`,
  "\x1b[0m"
);
// Checkear bien, no funciona
export const deleteNode: SolutionFunction = (
  head: any,
  nodeToDelete: any
): any => {
  let parsedList = JSON.parse(head);
  let deleteList = JSON.parse(nodeToDelete);
  deleteList.val = parsedList.next?.val ?? null;
  deleteList.next = parsedList.next?.next ?? null;
  return deleteList;
};
