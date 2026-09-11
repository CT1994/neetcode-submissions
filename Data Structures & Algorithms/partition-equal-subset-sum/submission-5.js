class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canPartition(nums) {
        const sum = nums.reduce((a, b) => a + b, 0);
        if (sum % 2 !== 0) return false;
        const target = sum / 2;

        const dp = Array.from({ length: nums.length }, () => new Array(sum + 1).fill(-1));
        const dfs = (i, sum) => {
            if (sum === target) return true;
            if (sum > target || i === nums.length) return false;
            if (dp[i][sum] !== -1) return dp[i][sum];
            return (dp[i][sum] = dfs(i + 1, sum) || dfs(i + 1, sum + nums[i]));
        };
        return dfs(0, 0);
    }
}
