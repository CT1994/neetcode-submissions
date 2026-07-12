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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        if (lists.length === 0) return null;
        while (lists.length > 1) {
            const mergedList = [];
            for (let i = 0; i < lists.length; i += 2) {
                mergedList.push(this.merge(lists[i], lists[i + 1]));
            }
            lists = mergedList;
        }
        return lists[0];
    }

    merge(list1, list2) {
        const head = new ListNode();
        let cur = head;

        while (list1 && list2) {
            if (list1.val <= list2.val) {
                cur.next = list1;
                list1 = list1.next;
            } else {
                cur.next = list2;
                list2 = list2.next;
            }
            cur = cur.next;
        }

        cur.next = list1 ? list1 : list2;

        return head.next;
    }
}
