/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        let reverse = null;
        let curr = head;

        while (curr) {
            const newNode = curr;
            curr = curr.next;

            newNode.next = reverse;
            reverse = newNode
        }

        return reverse;
    }
}
