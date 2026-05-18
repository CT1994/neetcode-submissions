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
            while (stack.length > 0 && heights[i] < stack[stack.length - 1][1]) {
                const [idx, height] = stack.pop();
                maxArea = Math.max(maxArea, height * (i - idx));
                start = idx;
            }
            stack.push([start, heights[i]])
        }

        for (const [i, h] of stack) {
            maxArea = Math.max(maxArea, h * (heights.length - i))
        }

        return maxArea
    }
}
