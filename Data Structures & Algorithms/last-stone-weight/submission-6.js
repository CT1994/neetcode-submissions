class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        const maxHeap = new PriorityQueue((a, b) => b - a, stones);

        while (maxHeap.size() > 1) {
            maxHeap.push(maxHeap.pop() - maxHeap.pop());
        }

        return maxHeap.front();
    }
}
