class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        let maxArea = 0;
        const stack = [];
        for (let i = 0; i < heights.length; i++) {
            let start = i;
            while (stack.length && stack[stack.length - 1][1] > heights[i]) {
                const [idx, height] = stack.pop();
                const width = i - idx;
                maxArea = Math.max(maxArea, height * width);
                start = idx;
            }
            stack.push([start, heights[i]]);
        }

        while (stack.length) {
            const [idx, height] = stack.pop();
            const width = heights.length - idx;
            maxArea = Math.max(maxArea, height * width);
        }
        return maxArea;
    }
}
