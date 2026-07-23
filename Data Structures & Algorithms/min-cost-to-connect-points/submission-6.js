class Solution {
    /**
     * @param {number[][]} points
     * @return {number}
     */
    minCostConnectPoints(points) {
        const n = points.length;
        const adjList = [];
        for (let i = 0; i < n; i++) {
            adjList[i] = [];
        }

        for (let i = 0; i < n; i++) {
            const [x1, y1] = points[i];
            for (let j = i + 1; j < n; j++) {
                const [x2, y2] = points[j];
                const dist = Math.abs(x1 - x2) + Math.abs(y1 - y2);
                adjList[i].push([dist, j]);
                adjList[j].push([dist, i]);
            }
        }

        let res = 0;
        const visit = new Set();
        const minHeap = new MinPriorityQueue((val) => val[0]);
        minHeap.push([0, 0]);
        while (visit.size < n) {
            const [cost, i] = minHeap.pop();
            if (visit.has(i)) continue;
            res += cost;
            visit.add(i);
            for (const [nCost, nI] of adjList[i]) {
                if (!visit.has(nI)) {
                    minHeap.push([nCost, nI]);
                }
            }
        }
        return res;
    }
}
