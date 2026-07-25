class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    findTargetSumWays(nums, target) {
        const dp = {};

        const dfs = (i, sum) => {
            if (i === nums.length) return sum === target ? 1 : 0;
            const key = `${i}-${sum}`;
            if (key in dp) return dp[key];
            return (dp[key] = dfs(i + 1, sum + nums[i]) + dfs(i + 1, sum - nums[i]));
        };

        return dfs(0, 0);
    }
}
