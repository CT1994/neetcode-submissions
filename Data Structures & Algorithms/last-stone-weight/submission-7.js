class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        const minHeap = new PriorityQueue((a, b) => b - a, stones);

        while (minHeap.size() > 1) {
            minHeap.push(minHeap.pop() - minHeap.pop());
        }

        return minHeap.front();
    }
}
