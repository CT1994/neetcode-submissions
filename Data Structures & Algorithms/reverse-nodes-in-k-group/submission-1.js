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
        const dummy = new ListNode(0, head);
        let groupPrev = dummy;

        while (true) {
            let kth = groupPrev;
            let i = k;
            while (kth && i > 0) {
                kth = kth.next;
                i--
            }
            console.log(kth)

            if (!kth) {
                break;
            }

            const groupNext = kth.next;

            let prev = kth.next;
            let cur = groupPrev.next;

            while (cur !== groupNext) {
                const tmp = cur.next;
                cur.next = prev;
                prev = cur;
                cur = tmp
            }

            const tmp = groupPrev.next;
            groupPrev.next = kth;
            groupPrev = tmp;
        }

        return dummy.next
    }
}
