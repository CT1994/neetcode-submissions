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
            arr.push(cur.val);
            cur = cur.next;
        }

        const remove = arr.length - n;
        const dummyHead = new ListNode(0);
        cur = dummyHead;
        for (let i = 0; i < arr.length; i++) {
            if (i === remove) continue;
            cur.next = new ListNode(arr[i]);
            cur = cur.next;
        }
        return dummyHead.next;
    }
}
