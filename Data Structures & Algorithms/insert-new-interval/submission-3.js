class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     */
    insert(intervals, newInterval) {
        const n = intervals.length;
        if (!n) {
            return [newInterval]
        }

        let i = 0;
        while (i < n && intervals[i][0] < newInterval[0]) {
            i++
        }
        
        intervals.splice(i, 0, newInterval);

        const res = [intervals[0]];
        for (let i = 1; i < intervals.length; i++) {
            const prev = res[res.length - 1];
            const next = intervals[i];
            if (prev[1] >= next[0]) {
                prev[1] = Math.max(prev[1], next[1])
            }
            else {
                res.push(next)
            }
        }

        return res
    }
}
