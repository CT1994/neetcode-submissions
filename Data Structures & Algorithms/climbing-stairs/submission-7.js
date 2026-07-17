class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        const dp = new Array(n).fill(-1);
        const dfs = (i) => {
            if (i >= n) return i === n;
            if (dp[i] > -1) return dp[i];
            return (dp[i] = dfs(i + 1) + dfs(i + 2));
        };
        return dfs(0);
    }
}
