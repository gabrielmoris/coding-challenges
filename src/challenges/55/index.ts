console.log(
  "\x1b[44m",
  "\x1b[33m",
  `A linked list of length n is given such that each node contains an additional random pointer, which could point to any node in the list, or null.

  Construct a deep copy of the list. The deep copy should consist of exactly n brand new nodes, where each new node has its value set to the value of its corresponding original node. Both the next and random pointer of the new nodes should point to new nodes in the copied list such that the pointers in the original list and copied list represent the same list state. None of the pointers in the new list should point to nodes in the original list.
  
  For example, if there are two nodes X and Y in the original list, where X.random --> Y, then for the corresponding two nodes x and y in the copied list, x.random --> y.
  
  Return the head of the copied linked list.
  
  The linked list is represented in the input/output as a list of n nodes. Each node is represented as a pair of [val, random_index] where:
  
  val: an integer representing Node.val
  random_index: the index of the node (range from 0 to n-1) that the random pointer points to, or null if it does not point to any node.
  Your code will only be given the head of the original linked list.
  Input: head = [[7,null],[13,0],[11,4],[10,2],[1,0]]
Output: [[7,null],[13,0],[11,4],[10,2],[1,0]]
https://assets.leetcode.com/uploads/2019/12/18/e1.png
  `,
  "\x1b[0m"
);

class Node {
  val: number;
  next: Node | null;
  random: Node | null;
  constructor(val?: number, next?: Node, random?: Node) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
    this.random = random === undefined ? null : random;
  }
}

export const copyRandomList = ({ head }: any) => {
  // Iterate to the LL creating isolated heads whose next points at null and random at null

  // iterate again andpoint to the random nodes of the linked list

  // iterate again pointing to the next
  console.log(head);
};
