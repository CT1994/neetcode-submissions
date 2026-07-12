class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        const minHeap = new PriorityQueue((a, b) => a[0] - b[0]);
        for (const point of points) {
            minHeap.push([point[0] * point[0] + point[1] * point[1], point]);
        }
        const res = [];
        while (k) {
            res.push(minHeap.pop()[1]);
            k--;
        }
        return res;
    }
}
