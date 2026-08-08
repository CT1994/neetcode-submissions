class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canPartition(nums) {
        const total = nums.reduce((a, b) => a + b, 0);
        if (total % 2 !== 0) return false;
        const target = total / 2;
        const dp = Array.from({ length: nums.length }, () => new Array(target + 1).fill(-1));
        const dfs = (i, sum) => {
            if (sum > target || i === nums.length) return false;
            if (sum === target) return true;
            if (dp[i][sum] !== -1) return dp[i][sum];

            return (dp[i][sum] = dfs(i + 1, sum) || dfs(i + 1, nums[i] + sum));
        };
        return dfs(0, 0);
    }
}
