class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {number}
     */
    minDistance(word1, word2) {
        const dp = Array.from({ length: word1.length }, () => new Array(word2.length).fill(-1));
        const dfs = (i, j) => {
            if (i === word1.length) return word2.length - j;
            if (j === word2.length) return word1.length - i;
            if (dp[i][j] !== -1) return dp[i][j];

            if (word1[i] === word2[j]) {
                return (dp[i][j] = dfs(i + 1, j + 1));
            }

            const insertChar = 1 + dfs(i, j + 1);
            const deleteChar = 1 + dfs(i + 1, j);
            const replaceChar = 1 + dfs(i + 1, j + 1);

            return (dp[i][j] = Math.min(insertChar, deleteChar, replaceChar));
        };
        return dfs(0, 0);
    }
}
