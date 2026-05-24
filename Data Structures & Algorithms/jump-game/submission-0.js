class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums) {
        const n = nums.length;
        const dp = new Array(n).fill(-1)
        const dfs = (pos) => {
            if (pos === n - 1) {
                return true
            }

            if (dp[pos] > -1) {
                return !!dp[pos];
            }

            const end = pos + nums[pos];
            for (let i = pos + 1; i <= end; i++) {
                dp[i] = dfs(i)
                if (!!dp[i]) {
                    return true
                }
            }

            return false;
        }

        return dfs(0);
    }
}
