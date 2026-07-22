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
            adjList[s].push([d, w]);
        }

        const shortest = {};
        const minHeap = new MinPriorityQueue((val) => val[1]);
        minHeap.push([k, 0]);
        while (!minHeap.isEmpty()) {
            const [n1, w1] = minHeap.pop();
            if (shortest.hasOwnProperty(n1)) continue;
            shortest[n1] = w1;
            for (const [n2, w2] of adjList[n1]) {
                minHeap.push([n2, w1 + w2]);
            }
        }

        let res = 0;
        for (let i = 1; i <= n; i++) {
            if (!shortest.hasOwnProperty(i)) return -1;
            res = Math.max(res, shortest[i]);
        }
        return res;
    }
}
