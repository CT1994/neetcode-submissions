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
            adjList[edges[i][0]].push([succProb[i], edges[i][1]]);
            adjList[edges[i][1]].push([succProb[i], edges[i][0]]);
        }

        const maxHeap = new MaxPriorityQueue((val) => val[0]);
        const visit = new Set();
        maxHeap.push([1, start_node]);
        while (!maxHeap.isEmpty()) {
            const [p1, n1] = maxHeap.pop();
            if (n1 === end_node) return p1;
            visit.add(n1);

            for (const [p2, n2] of adjList[n1]) {
                if (!visit.has(n2)) {
                    maxHeap.push([p1 * p2, n2]);
                }
            }
        }

        return 0;
    }
}
