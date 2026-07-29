class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    findTargetSumWays(nums, target) {
        const cache = {};
        const dfs = (i, sum) => {
            if (i === nums.length) return sum === target;
            const key = `${i},${sum}`;
            if (cache[key]) return cache[key];

            return (cache[key] = dfs(i + 1, sum + nums[i]) + dfs(i + 1, sum - nums[i]));
        };
        return dfs(0, 0);
    }
}
