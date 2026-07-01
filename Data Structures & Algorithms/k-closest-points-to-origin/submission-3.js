class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        points.sort((a, b) => (a[0] ** 2 + a[1] ** 2) - (b[0] ** 2 + b[1] ** 2));

        let res = [];
        for (let i = 0; i < k; i++) {
            res.push(points[i]);
        }
        return res;
    }
}
