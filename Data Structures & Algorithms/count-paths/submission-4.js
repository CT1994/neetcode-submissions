class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m, n) {
        const dp = Array.from({ length: m }, () => new Array(n).fill(-1));
        const dfs = (r, c) => {
            if (r < 0 || c < 0 || r === m || c === n) return 0;
            if (r === m - 1 && c === n - 1) return 1;
            if (dp[r][c] !== -1) return dp[r][c];
            return (dp[r][c] = dfs(r + 1, c) + dfs(r, c + 1));
        };
        return dfs(0, 0);
    }
}
