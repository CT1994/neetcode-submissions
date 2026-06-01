class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number}
     */
    eraseOverlapIntervals(intervals) {
        intervals.sort((a, b) => a[1] - b[1])
        let count = 0;
        let lastEnd = intervals[0][1];

        for (let i = 1; i < intervals.length; i++) {
            const [start, end] = intervals[i];
            if (start < lastEnd) {
                count++
                lastEnd = Math.min(lastEnd, end)
            }
            else {
                lastEnd = end
            }
        }

        return count
    }
}
