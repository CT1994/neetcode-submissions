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
                const distance = Math.abs(x1 - x2) + Math.abs(y1 - y2);
                adjList[i].push([j, distance]);
                adjList[j].push([i, distance]);
            }
        }

        const minHeap = new MinPriorityQueue((val) => val[1]);
        minHeap.push([0, 0]);
        let res = 0;
        const visit = new Set();
        while (visit.size < points.length && !minHeap.isEmpty()) {
            const [n1, t1] = minHeap.pop();
            if (visit.has(n1)) continue;
            visit.add(n1);
            res += t1;
            for (const [n2, t2] of adjList[n1]) {
                if (!visit.has(n2)) {
                    minHeap.push([n2, t2]);
                }
            }
        }
        return res;
    }
}
