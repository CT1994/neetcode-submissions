class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        const minHeap = new MinPriorityQueue((val) => val[2]);
        for (const [x, y] of points) {
            minHeap.push([x, y, x * x + y * y]);
        }

        const res = [];
        while (k) {
            const [x, y] = minHeap.pop();
            res.push([x, y]);
            k--;
        }
        return res;
    }
}
