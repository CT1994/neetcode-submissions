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
     * @param {number} k
     * @return {ListNode}
     */
    reverseKGroup(head, k) {
        let cur = head;
        let group = 0;
        while (cur && group < k) {
            group++;
            cur = cur.next;
        }

        if (group === k) {
            cur = this.reverseKGroup(cur, k);
            while (group--) {
                const tmp = head.next;
                head.next = cur;
                cur = head;
                head = tmp;
            }

            head = cur;
        }

        return head;
    }
}
