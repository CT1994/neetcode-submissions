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

        let slow2 = slow;
        let prev = null;
        while (slow2) {
            const tmp = slow2.next;
            slow2.next = prev;
            prev = slow2;
            slow2 = tmp;
        }
        let res = 0;
        while (prev && head) {
            res = Math.max(res, prev.val + head.val);
            prev = prev.next;
            head = head.next;
        }

        return res;
    }
}
