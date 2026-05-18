class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        let largest = 0;

        for (let i = 0; i < heights.length; i++) {
            largest = Math.max(largest, heights[i])
            let minHeight = heights[i];
            for (let j = i + 1; j < heights.length; j++) {
                minHeight = Math.min(minHeight, heights[j]);
                largest = Math.max(largest, minHeight * (j - i + 1), heights[j])
            }
        }

        return largest
    }
}
