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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        const arr = [];
        let cur = head;
        while (cur) {
            arr.push(cur);
            cur = cur.next;
        }

        const remove = arr.length - n;
        if (remove === 0) {
            return head.next;
        }

        arr[remove - 1].next = arr[remove].next;
        return head;
    }
}
