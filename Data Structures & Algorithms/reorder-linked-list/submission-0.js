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
     * @return {void}
     */
    reorderList(head) {
        const arr = [];
        let cur = head;

        while (cur) {
            arr.push(cur);
            cur = cur.next;
        }

        let l = 0;
        let r = arr.length - 1;

        while (l < r) {
            arr[l].next = arr[r];
            l++;
            if (l == r) break;
            arr[r].next = arr[l];
            r--;
        }
        arr[l].next = null;
    }
}
