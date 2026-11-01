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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        const dummy = new ListNode(0);
        let cur = dummy;
        let carry = 0;
        while (l1 || l2) {
            const val1 = l1?.val ?? 0;
            const val2 = l2?.val ?? 0;
            const val = val1 + val2 + carry;
            carry = Math.floor(val / 10);
            cur.next = new ListNode(val % 10);
            cur = cur.next;

            l1 = l1 ? l1.next : null;
            l2 = l2 ? l2.next : null;
        }

        if (carry > 0) {
            cur.next = new ListNode(carry);
        }

        return dummy.next;
    }
}
