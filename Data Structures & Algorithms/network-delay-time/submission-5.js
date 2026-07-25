class Solution {
    /**
     * @param {number[][]} times
     * @param {number} n
     * @param {number} k
     * @return {number}
     */
    networkDelayTime(times, n, k) {
        const adjList = {};
        for (let i = 1; i <= n; i++) {
            adjList[i] = [];
        }

        for (const [s, d, w] of times) {
            adjList[s].push([w, d]);
        }

        const minHeap = new MinPriorityQueue((val) => val[0]);
        const visit = new Set();
        let res = 0;
        minHeap.push([0, k]);
        while (!minHeap.isEmpty()) {
            const [t1, n1] = minHeap.pop();
            if (visit.has(n1)) continue;
            visit.add(n1);
            res = t1;
            for (const [t2, n2] of adjList[n1]) {
                if (!visit.has(n2)) {
                    minHeap.push([t1 + t2, n2]);
                }
            }
        }

        return visit.size === n ? res : -1;
    }
}
