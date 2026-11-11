class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {number}
     */
    numDistinct(s, t) {
        const dp = Array.from({ length: s.length + 1 }, () => Array(t.length + 1).fill(-1));
        const dfs = (i, j) => {
            if (t.length === j) return 1;
            if (s.length === i) return 0;
            if (dp[i][j] !== -1) return dp[i][j];

            let skip = dfs(i + 1, j);
            let include = 0;
            if (s[i] === t[j]) {
                include = dfs(i + 1, j + 1);
            }

            return (dp[i][j] = skip + include);
        };

        return dfs(0, 0);
    }
}
