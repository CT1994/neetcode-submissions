class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        const dp = new Array(n + 1).fill(-1);
        const dfs = (i) => {
            if (i >= n) return i === n ? 1 : 0;
            if (dp[i] !== -1) return dp[i];
            return (dp[i] = dfs(i + 1) + dfs(i + 2));
        };
        return dfs(0);
    }
}
