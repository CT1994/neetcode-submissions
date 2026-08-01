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

        for (const [n1, n2, t] of times) {
            adjList[n1].push([n2, t]);
        }

        const minHeap = new MinPriorityQueue((val) => val[1]);
        minHeap.push([k, 0]);
        let res = 0;
        const visit = new Set();
        while (!minHeap.isEmpty()) {
            const [n1, t1] = minHeap.pop();
            if (visit.has(n1)) continue;
            visit.add(n1);
            res = t1;
            for (const [n2, t2] of adjList[n1]) {
                if (!visit.has(n2)) {
                    minHeap.push([n2, t1 + t2]);
                }
            }
        }

        return visit.size === n ? res : -1;
    }
}
