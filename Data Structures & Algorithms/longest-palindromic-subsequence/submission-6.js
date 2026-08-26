class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    longestPalindromeSubseq(s) {
        const dp = Array.from({ length: s.length + 1 }, () => new Array(s.length + 1).fill(-1));
        const dfs = (i, j) => {
            if (i > j) return 0;
            if (i === j) return 1;
            if (dp[i][j] !== -1) return dp[i][j];
            if (s[i] === s[j]) return (dp[i][j] = 2 + dfs(i + 1, j - 1));
            return (dp[i][j] = Math.max(dfs(i + 1, j), dfs(i, j - 1)));
        };
        return dfs(0, s.length - 1);
    }
}
