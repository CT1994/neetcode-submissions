class Solution {
    /**
     * @param {number[][]} grid
     * @returns {number}
     */
    countPaths(grid) {
        const ROWS = grid.length;
        const COLS = grid[0].length;

        const dfs = (r, c) => {
            if (r < 0 || c < 0 || r === ROWS || c === COLS || grid[r][c] === 1) {
                return 0;
            }

            if (r === ROWS - 1 && c === COLS - 1) return 1;
            grid[r][c] = 1;
            let count = 0;
            count += dfs(r + 1, c);
            count += dfs(r, c + 1);
            count += dfs(r - 1, c);
            count += dfs(r, c - 1);
            grid[r][c] = 0;
            return count
        }

        return dfs(0, 0)
    }
}
