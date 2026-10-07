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
        const map = new Map();
        map.set(null, null);

        let cur = head;
        while (cur) {
            map.set(cur, new Node(cur.val));
            cur = cur.next;
        }

        cur = head;
        while (cur) {
            const node = map.get(cur);
            node.next = map.get(cur.next) || null;
            node.random = map.get(cur.random);
            cur = cur.next;
        }

        return map.get(head);
    }
}
