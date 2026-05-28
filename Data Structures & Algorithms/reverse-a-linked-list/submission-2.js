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
        let cur = head;
        let prev = null;

        while (cur) {
            const tmp = cur.next;
            cur.next = prev;
            prev = cur;
            cur = tmp
        }

        return prev
    }
}
