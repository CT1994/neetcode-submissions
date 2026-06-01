class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number}
     */
    eraseOverlapIntervals(intervals) {
        intervals.sort((a, b) => a[0] - b[0]);
        const res = [intervals[0]];

        for (let i = 1; i < intervals.length; i++) {
            const prev = res[res.length - 1];
            const next = intervals[i];
            if (prev[1] > next[0]) {
                prev[1] = Math.min(prev[1], next[1])
            }
            else {
                res.push(next)
            }
        }

        console.log(res)

        return intervals.length - res.length
    }
}
