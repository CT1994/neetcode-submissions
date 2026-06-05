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
        let l1String = "";
        let l2String = "";
        while (l1) {
            l1String = l1.val + l1String;
            l1 = l1.next;
        }

        while (l2) {
            l2String = l2.val + l2String;
            l2 = l2.next;
        }

        const sum = (BigInt(BigInt(l1String) + BigInt(l2String))).toString();
        let dummy = new ListNode();
        let head = dummy;

        for (let i = sum.length - 1; i >= 0; i--) {
            head.next = new ListNode(parseInt(sum[i]));
            head = head.next;
        }
        return dummy.next;
    }
}
