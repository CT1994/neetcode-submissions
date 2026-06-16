class Solution {
    /**
     * @param {number[][]} matrix
     * @return {number}
     */
    longestIncreasingPath(matrix) {
        const ROWS = matrix.length;
        const COLS = matrix[0].length;
        const cache = new Uint16Array(ROWS * COLS);
        let LIP = 0;

        const dfs = (r, c, prevVal) => {
            if (r < 0 || c < 0 || r === ROWS || c === COLS || matrix[r][c] <= prevVal) {
                return 0;
            }
            const key = r * COLS + c;
            if (cache[key] > 0) {
                return cache[key];
            }

            let res = 1;

            res = Math.max(res, 1 + dfs(r + 1, c, matrix[r][c]));
            res = Math.max(res, 1 + dfs(r, c + 1, matrix[r][c]));
            res = Math.max(res, 1 + dfs(r - 1, c, matrix[r][c]));
            res = Math.max(res, 1 + dfs(r, c - 1, matrix[r][c]));

            return (cache[key] = res);
        };

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                LIP = Math.max(LIP, dfs(r, c, -1));
            }
        }

        return LIP;
    }
}
