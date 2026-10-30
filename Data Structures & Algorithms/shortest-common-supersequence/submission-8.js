class Solution {
    /**
     * @param {string} str1
     * @param {string} str2
     * @return {string}
     */
    shortestCommonSupersequence(str1, str2) {
        const dp = Array.from({ length: str1.length + 1 }, () =>
            new Array(str2.length + 1).fill(-1),
        );

        const dfs = (i, j) => {
            if (str1.length === i) return str2.slice(j);
            if (str2.length === j) return str1.slice(i);
            if (dp[i][j] !== -1) return dp[i][j];

            if (str1[i] === str2[j]) {
                return (dp[i][j] = str1[i] + dfs(i + 1, j + 1));
            }

            const newStr1 = str1[i] + dfs(i + 1, j);
            const newStr2 = str2[j] + dfs(i, j + 1);
            return (dp[i][j] = newStr1.length < newStr2.length ? newStr1 : newStr2);
        };

        return dfs(0, 0);
    }
}
