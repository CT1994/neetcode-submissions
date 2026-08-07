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
        for (const [n1, n2, w] of edges) {
            adjList[n1].push([w, n2]);
            adjList[n2].push([w, n1]);
        }

        let res = 0;
        let visit = new Set();
        const minHeap = new MinPriorityQueue((val) => val[0]);
        minHeap.push([0, 0]);
        while (!minHeap.isEmpty()) {
            const [w1, n1] = minHeap.pop();
            if (visit.has(n1)) continue;
            visit.add(n1);
            res += w1;
            for (const [w2, n2] of adjList[n1]) {
                if (!visit.has(n2)) {
                    minHeap.push([w2, n2]);
                }
            }
        }

        return visit.size === n ? res : -1;
    }
}
