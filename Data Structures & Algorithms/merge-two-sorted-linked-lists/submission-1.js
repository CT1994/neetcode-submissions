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
        let mergedHead = new ListNode(-1);
        let prev = mergedHead;
        let curr1 = list1;
        let curr2 = list2;

        while (curr1 || curr2) {
            let val1 = curr1?.val ?? Infinity;
            let val2 = curr2?.val ?? Infinity;

            if (val1 < val2) {
                prev.next = new ListNode(curr1.val);
                prev = prev.next;
                curr1 = curr1.next;
            }
            else {
                prev.next = new ListNode(curr2.val);
                prev = prev.next;
                curr2 = curr2.next;
            }
        }

        return mergedHead.next;
    }
}
