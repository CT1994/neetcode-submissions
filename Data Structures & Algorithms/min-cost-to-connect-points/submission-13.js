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
                const w = Math.abs(x1 - x2) + Math.abs(y1 - y2);
                adjList[i].push([j, w]);
                adjList[j].push([i, w]);
            }
        }

        const minHeap = new MinPriorityQueue((val) => val[1]);
        minHeap.push([0, 0]);
        const visit = new Set();
        let mst = 0;
        while (visit.size < points.length && !minHeap.isEmpty()) {
            const [n1, w1] = minHeap.pop();
            if (visit.has(n1)) continue;
            visit.add(n1);
            mst += w1;
            for (const [n2, w2] of adjList[n1]) {
                if (!visit.has(n2)) {
                    minHeap.push([n2, w2]);
                }
            }
        }
        return mst;
    }
}
