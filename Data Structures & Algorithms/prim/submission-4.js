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
        for (const [n1, n2, weight] of edges) {
            adjList[n1].push([n2, weight]);
            adjList[n2].push([n1, weight]);
        }

        const minHeap = new MinPriorityQueue((val) => val[0]);
        for (const [n, w] of adjList[0]) {
            minHeap.push([w, n]);
        }

        let res = 0;
        const visit = new Set();
        visit.add(0);

        while (!minHeap.isEmpty()) {
            const [w, n1] = minHeap.pop();
            if (visit.has(n1)) continue;
            visit.add(n1);
            res += w;
            for (const [n, w] of adjList[n1]) {
                if (!visit.has(n)) {
                    minHeap.push([w, n]);
                }
            }
        }
        return visit.size === n ? res : -1;
    }
}
