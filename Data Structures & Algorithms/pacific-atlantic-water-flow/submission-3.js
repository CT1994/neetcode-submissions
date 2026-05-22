class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        if (!heights || heights.length === 0) return [];
        
        const ROWS = heights.length;
        const COLS = heights[0].length;

        const oceanFlags = new Uint8Array(ROWS * COLS);

        const dfs = (r, c, flag, prevHeight) => {
            const idx = r * COLS + c;
            
            if (
                r < 0 || c < 0 || r === ROWS || c === COLS ||
                heights[r][c] < prevHeight ||
                (oceanFlags[idx] & flag) === flag
            ) {
                return;
            }

            oceanFlags[idx] |= flag;

            const currHeight = heights[r][c];
            dfs(r + 1, c, flag, currHeight);
            dfs(r - 1, c, flag, currHeight);
            dfs(r, c + 1, flag, currHeight);
            dfs(r, c - 1, flag, currHeight);
        };

        for (let r = 0; r < ROWS; r++) {
            dfs(r, 0, 1, heights[r][0]);
            dfs(r, COLS - 1, 2, heights[r][COLS - 1]);
        }

        for (let c = 0; c < COLS; c++) {
            dfs(0, c, 1, heights[0][c]);
            dfs(ROWS - 1, c, 2, heights[ROWS - 1][c]);
        }

        const res = [];
        for (let i = 0; i < oceanFlags.length; i++) {
            if (oceanFlags[i] === 3) {
                res.push([(i / COLS) | 0, i % COLS]);
            }
        }

        return res;
    }
}