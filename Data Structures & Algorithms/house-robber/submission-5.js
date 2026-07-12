class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        const dp = new Array(nums.length + 1).fill(-1);
        const dfs = (i) => {
            if (i >= nums.length) {
                return 0;
            }

            if (dp[i] > -1) {
                return dp[i];
            }

            return (dp[i] = Math.max(dfs(i + 1), nums[i] + dfs(i + 2)));
        };

        return dfs(0);
    }
}
