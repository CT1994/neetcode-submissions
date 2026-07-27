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
        const adjList = new Array(n);
        for (let i = 0; i <= n; i++) {
            adjList[i] = [];
        }

        for (let i = 0; i < edges.length; i++) {
            const [s, d] = edges[i];
            const w = succProb[i];
            adjList[s].push([w, d]);
            adjList[d].push([w, s]);
        }

        const maxHeap = new MaxPriorityQueue((val) => val[0]);
        maxHeap.push([1, start_node]);
        const visit = new Set();
        while (!maxHeap.isEmpty()) {
            const [w1, n1] = maxHeap.pop();
            if (visit.has(n1)) continue;
            if (n1 === end_node) return w1;
            visit.add(n1);
            for (const [w2, n2] of adjList[n1]) {
                if (!visit.has(n2)) {
                    maxHeap.push([w1 * w2, n2]);
                }
            }
        }

        return 0;
    }
}
