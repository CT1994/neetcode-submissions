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
        for (const [src, dst, w] of edges) {
            adjList[src].push([dst, w]);
        }

        const minHeap = new MinPriorityQueue((val) => val[1]);
        minHeap.push([src, 0]);
        const shortest = {};
        while (!minHeap.isEmpty()) {
            const [n1, w1] = minHeap.pop();
            if (shortest.hasOwnProperty(n1)) continue;
            shortest[n1] = w1;
            for (const [n2, w2] of adjList[n1]) {
                if (!shortest.hasOwnProperty(n2)) {
                    minHeap.push([n2, w1 + w2]);
                }
            }
        }

        for (let i = 0; i < n; i++) {
            if (!shortest.hasOwnProperty(i)) {
                shortest[i] = -1;
            }
        }
        return shortest;
    }
}
