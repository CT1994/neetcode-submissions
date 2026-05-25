class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    jump(nums) {
        const dp = new Array(nums.length).fill(-1);
        const dfs = (i) => {
            if (i === nums.length - 1) {
                return 0;
            }

            if (dp[i] > -1) {
                return dp[i];
            }

            let count = nums.length - 1;
            const end = i + nums[i];
            for (let j = i + 1; j <= end; j++) {
                count = Math.min(count, 1 + dfs(j));
            }

            dp[i] = count;

            return count;
        };

        return dfs(0);
    }
}
