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
        const adjList = Array.from({ length: n }, () => []);
        for (let i = 0; i < edges.length; i++) {
            const src = edges[i][0];
            const dst = edges[i][1];
            const prob = succProb[i];
            adjList[src].push([dst, prob]);
            adjList[dst].push([src, prob]);
        }

        const maxHeap = new MaxPriorityQueue((val) => val[1]);
        const visit = new Set();
        maxHeap.push([start_node, 1]);
        while (visit.size < n && !maxHeap.isEmpty()) {
            const [n1, p1] = maxHeap.pop();
            if (n1 === end_node) return p1;
            if (visit.has(n1)) continue;
            visit.add(n1);
            for (const [n2, p2] of adjList[n1]) {
                if (!visit.has(n2)) {
                    maxHeap.push([n2, p1 * p2]);
                }
            }
        }

        return 0;
    }
}
