class Solution {
    /**
     * @param {number[][]} times
     * @param {number} n
     * @param {number} k
     * @return {number}
     */
    networkDelayTime(times, n, k) {
        const adjList = Array.from({ length: n + 1 }, () => []);
        for (const [n1, n2, w] of times) {
            adjList[n1].push([n2, w]);
        }
        const minHeap = new MinPriorityQueue((val) => val[1]);
        minHeap.push([k, 0]);
        const visit = new Set();
        let mst = 0;
        while (visit.size < n && !minHeap.isEmpty()) {
            const [n1, w1] = minHeap.pop();
            if (visit.has(n1)) continue;
            visit.add(n1);
            mst = w1;
            for (const [n2, w2] of adjList[n1]) {
                if (!visit.has(n2)) {
                    minHeap.push([n2, w1 + w2]);
                }
            }
        }

        return visit.size === n ? mst : -1;
    }
}
