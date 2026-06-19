class Solution {
    /**
     * @param {number[]} hand
     * @param {number} groupSize
     * @return {boolean}
     */
    isNStraightHand(hand, groupSize) {
        if (hand.length % groupSize !== 0) return false;

        const count = {};
        for (const n of hand) {
            count[n] = (count[n] || 0) + 1
        }

        const minPQ = new MinPriorityQueue();
        for (const key in count) {
            minPQ.push(Number(key));
        }

        while (!minPQ.isEmpty()) {
            const first = minPQ.front();
            for (let i = first; i < first + groupSize; i++) {
                if (!count[i]) return false;
                count[i] -= 1;
                if (count[i] === 0) {
                    if (i !== minPQ.front()) return false;
                    minPQ.pop()
                }
            }
        }

        return true;
    }
}
