class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        const minHeap = new MinPriorityQueue((val) => val[0]);
        for (const [x, y] of points) {
            minHeap.push([x * x + y * y, [x, y]]);
        }
        const res = [];
        while (k && !minHeap.isEmpty()) {
            res.push(minHeap.pop()[1]);
            k--;
        }
        return res;
    }
}
