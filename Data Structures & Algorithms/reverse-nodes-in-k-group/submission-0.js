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
        const nodes = [];
        let cur = head;

        while (cur) {
            const tmp = cur.next;
            cur.next = null
            nodes.push(cur)
            cur = tmp
        }

        const passes = Math.floor(nodes.length / k)
        for (let i = 0; i < passes; i++) {
            let l = i * k;
            let r = (i * k) + k - 1;
            while (l < r) {
                [nodes[l], nodes[r]] = [nodes[r], nodes[l]];
                l++
                r--
            }
        }

        for (let i = 1; i < nodes.length; i++) {
            nodes[i - 1].next = nodes[i]
        }

        return nodes[0]
    }
}
