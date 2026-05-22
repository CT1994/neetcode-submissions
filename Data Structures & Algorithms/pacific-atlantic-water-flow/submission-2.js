class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        const ROWS = heights.length;
        const COLS = heights[0].length;

        const pac = new Uint8Array(ROWS * COLS);
        const atl = new Uint8Array(ROWS * COLS);

        const dfs = (r, c, visit, prevVal) => {
            if (
                r < 0 ||
                c < 0 ||
                r === ROWS ||
                c === COLS ||
                prevVal > heights[r][c] ||
                visit[r * COLS + c]
            ) {
                return;
            }

            visit[r * COLS + c] = 1
            dfs(r + 1, c, visit, heights[r][c]);
            dfs(r, c + 1, visit, heights[r][c]);
            dfs(r - 1, c, visit, heights[r][c]);
            dfs(r, c - 1, visit, heights[r][c]);
        };

        for (let i = 0; i < ROWS; i++) {
            dfs(i, 0, pac, Math.MIN_SAFE_INTEGER);
            dfs(i, COLS - 1, atl, Math.MIN_SAFE_INTEGER);
        }

        for (let i = 0; i < COLS; i++) {
            dfs(0, i, pac, Math.MIN_SAFE_INTEGER);
            dfs(ROWS - 1, i, atl, Math.MIN_SAFE_INTEGER)
        }

        const res = []
        for (let i = 0; i < ROWS * COLS; i++) {
            if (pac[i] & atl[i]) {
                res.push([(i / COLS) | 0, i % COLS]);
            }
        }

        return res;
    }
}
