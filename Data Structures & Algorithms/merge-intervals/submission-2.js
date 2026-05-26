class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        intervals.sort((a, b) => a[0] - b[0]);
        const res = [intervals[0]];

        for (let i = 1; i < intervals.length; i++) {
            if (intervals[i][0] <= res[res.length - 1][1]) {
                res[res.length - 1][1] = Math.max(res[res.length - 1][1], intervals[i][1])
            }
            else {
                res.push(intervals[i])
            }
        }

        return res
    }
}
