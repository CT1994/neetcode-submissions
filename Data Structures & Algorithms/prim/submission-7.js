/**
 * const PriorityQueue = require('priority-queue-js');
 */

class Solution {
    /**
     * @param {number} n
     * @param {Array<Array<number>>} edges
     * @returns {number}
     */
    minimumSpanningTree(n, edges) {
        const adjList = Array.from({ length: n }, () => []);
        for (const [src, dst, cost] of edges) {
            adjList[src].push([dst, cost]);
            adjList[dst].push([src, cost]);
        }

        const minHeap = new MinPriorityQueue((val) => val[1]);
        minHeap.push([0, 0]);
        const visit = new Set();
        let res = 0;
        while (visit.size < n && !minHeap.isEmpty()) {
            const [n1, w1] = minHeap.pop();
            if (visit.has(n1)) continue;
            visit.add(n1);
            res += w1;
            for (const [n2, w2] of adjList[n1]) {
                if (!visit.has(n2)) {
                    minHeap.push([n2, w2]);
                }
            }
        }
        return visit.size === n ? res : -1;
    }
}
