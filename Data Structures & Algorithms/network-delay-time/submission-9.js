class Solution {
    /**
     * @param {number[][]} times
     * @param {number} n
     * @param {number} k
     * @return {number}
     */
    networkDelayTime(times, n, k) {
        const adjList = Array.from({ length: n + 1 }, () => new Array());
        for (const [src, dst, t] of times) {
            adjList[src].push([dst, t]);
        }
        const minHeap = new MinPriorityQueue((val) => val[1]);
        minHeap.push([k, 0]);
        let res = 0;
        const visit = new Set();
        while (visit.size < n && !minHeap.isEmpty()) {
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
