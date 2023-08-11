console.log(
  "\x1b[44m",
  "\x1b[33m",
  `
  Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. If the two linked lists have no intersection at all, return null.

For example, the following two linked lists begin to intersect at node c1:


The test cases are generated such that there are no cycles anywhere in the entire linked structure.

Note that the linked lists must retain their original structure after the function returns.

Custom Judge:

The inputs to the judge are given as follows (your program is not given these inputs):

intersectVal - The value of the node where the intersection occurs. This is 0 if there is no intersected node.
listA - The first linked list.
listB - The second linked list.
skipA - The number of nodes to skip ahead in listA (starting from the head) to get to the intersected node.
skipB - The number of nodes to skip ahead in listB (starting from the head) to get to the intersected node.
The judge will then create the linked structure based on these inputs and pass the two heads, headA and headB to your program. If you correctly return the intersected node, then your solution will be accepted.

 

Example 1:


Input: intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5], skipA = 2, skipB = 3
Output: Intersected at '8'
Explanation: The intersected node's value is 8 (note that this must not be 0 if the two lists intersect).
From the head of A, it reads as [4,1,8,4,5]. From the head of B, it reads as [5,6,1,8,4,5]. There are 2 nodes before the intersected node in A; There are 3 nodes before the intersected node in B.
- Note that the intersected node's value is not 1 because the nodes with value 1 in A and B (2nd node in A and 3rd node in B) are different node references. In other words, they point to two different locations in memory, while the nodes with value 8 in A and B (3rd node in A and 4th node in B) point to the same location in memory.
      `,
  "\x1b[0m"
);

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

/*
We will make both of them of equal length, by moving the first pointer from A to B, 
and the other pointer from B to A.
For Example
List A : [ 1, 2, 3, 4, 5, 6, 7, 8, null]
List B : [ 9, 10, 7, 8, null]
List A to B : [ 1, 2, 3, 4, 5, 6, 7, 8, null, 9, 10, 7, 8, null]
List B to A : [ 9, 10, 7, 8, null, 1, 2, 3, 4, 5, 6, 7, 8, null]
So We can Notice that if their is intersection it will be at the end; either both of them 
will meet at first intersection or at null if their is no intersection.
*/

const headA = {
  value: 1,
  next: {
    value: 9,
    next: {
      value: 1,
      next: {
        value: 1,
        next: {
          value: 2,
          next: {
            value: 4,
            next: null,
          },
        },
      },
    },
  },
};

const headB = {
  value: 9,
  next: headA.next.next.next,
};

export const getIntersectionNode = () => {
  let firstHead: any = headA; // will move from list A to List B
  let secondHead: any = headB; // will move from List B to List A

  while (firstHead != secondHead) {
    // if firstHead reach the first null then we switch to List B.
    firstHead = firstHead === null ? headB : firstHead.next;

    // if secondHead reach the first null the we switch to List A.
    secondHead = secondHead === null ? headA : secondHead.next;

    /*
			Note: I keep saying the first null beacuse at the second null (in case of no intersection)
			both of firstHead and secondHead will be equal, so the While loop will break before the switch to happen again.
		*/
  }
  // simply we can return either firstHead or secondHead as both are equal to either the first intersection or to null.
  return firstHead;
};
