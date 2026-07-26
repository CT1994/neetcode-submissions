class Solution {
    /**
     * @param {number[][]} points
     * @return {number}
     */
    minCostConnectPoints(points) {
        const adjList = [];
        for (let i = 0; i < points.length; i++) {
            adjList[i] = [];
        }

        for (let i = 0; i < points.length; i++) {
            const [x1, y1] = points[i];
            for (let j = i + 1; j < points.length; j++) {
                const [x2, y2] = points[j];
                const dist = Math.abs(x1 - x2) + Math.abs(y1 - y2);
                adjList[i].push([dist, j]);
                adjList[j].push([dist, i]);
            }
        }

        const minHeap = new MinPriorityQueue((val) => val[0]);
        minHeap.push([0, 0]);
        const visit = new Set();
        let res = 0;
        while (!minHeap.isEmpty()) {
            const [w1, n1] = minHeap.pop();
            if (visit.has(n1)) continue;
            visit.add(n1);
            res += w1;
            for (const [w2, n2] of adjList[n1]) {
                if (!visit.has(n2)) {
                    minHeap.push([w2, n2]);
                }
            }
        }
        return res;
    }
}
