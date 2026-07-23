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
     * @return {number}
     */
    pairSum(head) {
        let slow = head;
        let fast = head;

        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }

        let cur = slow;
        let prev = null;
        while (cur) {
            const tmp = cur.next;
            cur.next = prev;
            prev = cur;
            cur = tmp;
        }

        let res = 0;
        let start = head;
        let end = prev;
        while (start && end) {
            res = Math.max(res, start.val + end.val);
            start = start.next;
            end = end.next;
        }
        return res;
    }
}
