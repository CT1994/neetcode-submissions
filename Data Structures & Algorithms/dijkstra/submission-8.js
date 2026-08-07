/**
 * const PriorityQueue = require('priority-queue-js');
 */

class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @param {number} src
     * @returns {Object}
     */
    shortestPath(n, edges, src) {
        const adjList = Array.from({ length: n }, () => []);
        for (const [n1, n2, w] of edges) adjList[n1].push([w, n2]);
        const minHeap = new MinPriorityQueue((val) => val[0]);
        minHeap.push([0, src]);
        let shortest = new Array(n).fill(-1);
        while (!minHeap.isEmpty()) {
            const [w1, n1] = minHeap.pop();
            if (shortest[n1] !== -1) continue;
            shortest[n1] = w1;
            for (const [w2, n2] of adjList[n1]) {
                if (shortest[n2] === -1) {
                    minHeap.push([w1 + w2, n2]);
                }
            }
        }
        return shortest;
    }
}
