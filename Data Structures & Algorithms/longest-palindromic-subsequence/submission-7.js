class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    longestPalindromeSubseq(s) {
        const dp = Array.from({ length: s.length + 1 }, () => new Array(s.length + 1).fill(-1));
        const dfs = (l, r) => {
            if (l > r) return 0;
            if (l === r) return 1;
            if (dp[l][r] !== -1) return dp[l][r];
            if (s[l] === s[r]) {
                return (dp[l][r] = 2 + dfs(l + 1, r - 1));
            }

            return (dp[l][r] = Math.max(dfs(l + 1, r), dfs(l, r - 1)));
        };
        return dfs(0, s.length - 1);
    }
}
