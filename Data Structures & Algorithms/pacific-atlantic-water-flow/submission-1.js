class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        const ROWS = heights.length;
        const COLS = heights[0].length;

        const pacific = new Set();
        const atlantic = new Set();

        const dfs = (r, c, visit, prevVal) => {
            if (
                r < 0 ||
                c < 0 ||
                r === ROWS ||
                c === COLS ||
                prevVal > heights[r][c] ||
                visit.has(r * COLS + c)
            ) {
                return;
            }

            visit.add(r * COLS + c);
            dfs(r + 1, c, visit, heights[r][c]);
            dfs(r, c + 1, visit, heights[r][c]);
            dfs(r - 1, c, visit, heights[r][c]);
            dfs(r, c - 1, visit, heights[r][c]);
        };

        for (let i = 0; i < ROWS; i++) {
            dfs(i, 0, pacific, Math.MIN_SAFE_INTEGER);
            dfs(i, COLS - 1, atlantic, Math.MIN_SAFE_INTEGER);
        }

        for (let i = 0; i < COLS; i++) {
            dfs(0, i, pacific, Math.MIN_SAFE_INTEGER);
            dfs(ROWS - 1, i, atlantic, Math.MIN_SAFE_INTEGER)
        }

        const res = []
        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (pacific.has(r * COLS + c) && atlantic.has(r * COLS + c)) {
                    res.push([r, c])
                }
            }
        }

        return res;
    }
}
