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
        if (!head) {
            return null
        }

        let cur = head;
        let size = 0;

        while (cur) {
            size++;
            cur = cur.next;
        }

        const array = [];
        const randomIdx = [];

        cur = head;

        while (cur) {
            let count = 0;
            let randomCur = cur.random;
            while (randomCur) {
                count++;
                randomCur = randomCur.next;
            }
            randomIdx.push(count);
            array.push(new Node(cur.val));
            cur = cur.next;
        }

        for (let i = 0; i < array.length; i++) {
            array[i].next = array[i + 1] || null;
        }

        for (let i = 0; i < array.length; i++) {
            const randomNode = array[size - randomIdx[i]];
            if (randomNode) {
                array[i].random = randomNode
            }
        }

        return array[0];
    }
}
