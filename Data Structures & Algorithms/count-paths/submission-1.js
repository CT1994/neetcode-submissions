class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m, n) {
        return this.dp(m, n);
    }

    /**
     * @description This is the brute force approach of checking every path
     * @param {number} r
     * @param {number} c
     * @param {number} rows
     * @param {number} cols
     */
    dfs(r, c, rows, cols) {
        if (r === rows || c === cols) {
            return 0;
        }

        if (r === rows - 1 && c === cols - 1) {
            return 1;
        }

        return this.dfs(r + 1, c, rows, cols) + this.dfs(r, c + 1, rows, cols);
    }

    /**
     * @description This is the uses memoization to reduce the amount of repeated work searching the same paths
     * @param {number} r
     * @param {number} c
     * @param {number} rows
     * @param {number} cols
     * @param {number[][]} cache
     */
    memoization(r, c, rows, cols, cache) {
        if (r === rows || c === cols) {
            return 0;
        }

        if (cache[r * cols + c]) {
            return cache[r * cols + c];
        }

        if (r === rows - 1 && c === cols - 1) {
            return 1;
        }

        cache[r * cols + c] =
            this.memoization(r + 1, c, rows, cols, cache) +
            this.memoization(r, c + 1, rows, cols, cache);

        return cache[r * cols + c];
    }

    /**
     * @description This solution uses Bottom Up dynamic programming solution
     * @param {number} rows
     * @param {number} cols
     */
    dp(rows, cols) {
        let prevRow = new Array(cols).fill(0);

        for (let i = rows - 1; i >= 0; i--) {
            let curRow = new Array(cols).fill(0);
            curRow[cols - 1] = 1;

            for (let j = cols - 2; j >= 0; j--) {
                curRow[j] = prevRow[j] + curRow[j+1]
            }

            prevRow = curRow
        }

        return prevRow[0]
    }
}
