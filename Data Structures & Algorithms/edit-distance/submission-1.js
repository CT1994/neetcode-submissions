class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {number}
     */
    minDistance(word1, word2) {
        const cache = Array.from({ length: word1.length }, () => new Array(word2.length).fill(-1));
        const dfs = (i, j) => {
            if (i === word1.length) return word2.length - j;
            if (j === word2.length) return word1.length - i;
            if (cache[i][j] !== -1) return cache[i][j];

            let count = 0;
            if (word1[i] === word2[j]) {
                return dfs(i + 1, j + 1);
            }

            const replaceChar = 1 + dfs(i + 1, j + 1);
            const insertChar = 1 + dfs(i, j + 1);
            const deleteChar = 1 + dfs(i + 1, j);

            return (cache[i][j] = Math.min(insertChar, deleteChar, replaceChar));
        };
        return dfs(0, 0);
    }
}
