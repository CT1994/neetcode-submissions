class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        let res = 0;
        const stack = [];
        for (let i = 0; i < heights.length; i++) {
            let start = i;
            while (stack.length && stack[stack.length - 1][1] > heights[i]) {
                const [idx, height] = stack.pop();
                const width = i - idx;
                res = Math.max(res, height * width);
                start = idx;
            }
            stack.push([start, heights[i]]);
        }

        while (stack.length) {
            const [idx, height] = stack.pop();
            const width = heights.length - idx;
            res = Math.max(res, height * width);
        }

        return res;
    }
}
