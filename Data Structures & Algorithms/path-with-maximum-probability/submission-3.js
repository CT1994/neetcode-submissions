class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @param {number[]} succProb
     * @param {number} start_node
     * @param {number} end_node
     * @return {number}
     */
    maxProbability(n, edges, succProb, start_node, end_node) {
        const adjList = [];
        for (let i = 0; i < n; i++) {
            adjList[i] = [];
        }

        for (let i = 0; i < edges.length; i++) {
            const s = edges[i][0];
            const d = edges[i][1];
            const p = succProb[i];
            adjList[s].push([p, d]);
            adjList[d].push([p, s]);
        }
        const visited = new Set();
        const maxHeap = new MaxPriorityQueue((val) => val[0]);
        maxHeap.push([1, start_node]);
        while (!maxHeap.isEmpty()) {
            const [p1, n1] = maxHeap.pop();
            if (visited.has(n1)) continue;
            if (n1 === end_node) return p1;

            visited.add(n1);
            for (const [p2, n2] of adjList[n1]) {
                maxHeap.push([p1 * p2, n2]);
            }
        }

        return 0;
    }
}
