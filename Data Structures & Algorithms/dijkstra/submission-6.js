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
        const adjList = Array.from({ length: n }, () => new Array());
        for (const [src, dst, w] of edges) {
            adjList[src].push([dst, w]);
        }
        const shortest = {};
        const minHeap = new MinPriorityQueue((val) => val[1]);
        minHeap.push([src, 0]);
        while (!minHeap.isEmpty()) {
            const [s, w1] = minHeap.pop();
            if (shortest.hasOwnProperty(s)) continue;
            shortest[s] = w1;
            for (const [d, w2] of adjList[s]) {
                minHeap.push([d, w1 + w2]);
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
