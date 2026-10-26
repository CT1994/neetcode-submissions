// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        const copy = new Map();
        copy.set(null, null);

        let cur = head;
        while (cur) {
            copy.set(cur, new Node(cur.val));
            cur = cur.next;
        }

        cur = head;
        while (cur) {
            copy.get(cur).next = copy.get(cur.next);
            copy.get(cur).random = copy.get(cur.random);
            cur = cur.next;
        }

        return copy.get(head);
    }
}
