class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let res = 0;
        let l = 0;
        let r = heights.length - 1;

        while (l < r) {
            const val = Math.min(heights[l], heights[r]) * (r - l);

            if (heights[l] < heights[r]) {
                l++
            }
            else {
                r--
            }
            res = Math.max(res, val)
        }

        return res
    }
}
