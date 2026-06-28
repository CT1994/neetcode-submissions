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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        const head = new ListNode();
        let prev = head;

        while (list1 || list2) {
            const val1 = list1 ? list1.val : Infinity;
            const val2 = list2 ? list2.val : Infinity;

            if (val1 < val2) {
                prev.next = list1;
                prev = prev.next;
                list1 = list1.next;
            }
            else {
                prev.next = list2;
                prev = prev.next
                list2 = list2.next
            }
        }

        return head.next
    }
}
