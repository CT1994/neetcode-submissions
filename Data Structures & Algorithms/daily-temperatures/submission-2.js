class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const n = temperatures.length;
        const res = new Array(n).fill(0);
        const stack = [];

        for (let i = 0; i < n; i++) {
            while (stack.length > 0 && temperatures[i] > stack[stack.length - 1][1]) {
                const [idx] = stack.pop();
                res[idx] = i - idx;
            }
            stack.push([i, temperatures[i]]);
        }
        return res;
    }
}
