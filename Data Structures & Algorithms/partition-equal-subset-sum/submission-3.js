class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canPartition(nums) {
        const totalSum = nums.reduce((a, b) => a + b, 0);
        if (totalSum % 2 !== 0) return false;
        const target = totalSum / 2;
        
        const dp = Array.from({ length: nums.length }, () => new Array(target + 1).fill(-1));

        const dfs = (i, sum) => {
            if (sum === target) return true;
            if (i >= nums.length || sum > target) return false;
            if (dp[i][sum] !== -1) return dp[i][sum];

            return (dp[i][sum] = dfs(i + 1, sum) || dfs(i + 1, sum + nums[i]));
        };

        return dfs(0, 0);
    }
}