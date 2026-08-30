class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {number}
     */
    numDistinct(s, t) {
        const dp = Array.from({ length: s.length + 1 }, () => new Array(t.length + 1).fill(-1));
        const dfs = (i, j) => {
            if (j === t.length) return 1;
            if (i === s.length) return 0;
            if (dp[i][j] !== -1) return dp[i][j];
            let count = dfs(i + 1, j);
            if (s[i] === t[j]) count += dfs(i + 1, j + 1);
            return (dp[i][j] = count);
        };
        return dfs(0, 0);
    }
}
