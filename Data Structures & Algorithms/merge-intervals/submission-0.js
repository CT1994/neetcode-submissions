class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class Solution {
    constructor() {
        this.root = null;
    }

    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        intervals.sort((a, b) => a[0] - b[0]);
        const res = [intervals[0]];

        for (let i = 1; i < intervals.length; i++) {
            const prev = res.pop();
            const next = intervals[i];

            if (prev[0] <= next[0] && prev[1] >= next[0]) {
                res.push([Math.min(prev[0], next[0]), Math.max(prev[1], next[1])])
            }
            else {
                res.push(prev);
                res.push(next)
            }
        }

        return res
    }

    mergeHelper(root, val) {
    }
}
