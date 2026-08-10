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
            adjList[edges[i][0]].push([edges[i][1], succProb[i]]);
            adjList[edges[i][1]].push([edges[i][0], succProb[i]]);
        }

        const visit = new Set();
        const maxHeap = new MaxPriorityQueue((val) => val[1]);
        maxHeap.push([start_node, 1]);
        while (!maxHeap.isEmpty()) {
            const [n1, w1] = maxHeap.pop();
            if (n1 === end_node) {
                return w1;
            }
            if (visit.has(n1)) continue;
            visit.add(n1);
            for (const [n2, w2] of adjList[n1]) {
                if (!visit.has(n2)) {
                    maxHeap.push([n2, w1 * w2]);
                }
            }
        }

        return 0;
    }
}
