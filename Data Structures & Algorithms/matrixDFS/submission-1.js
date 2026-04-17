class Solution {
    /**
     * @param {number[][]} grid
     * @returns {number}
     */
    countPaths(grid) {
        const ROWS = grid.length;
        const COLS = grid[0].length;
        return this.dfs(grid, 0, 0, new Set(), ROWS, COLS)
    }

    /**
     * @param {number[][]} grid
     * @param {number} r
     * @param {number} c
     * @param {Set<number>} visits
     * @param {number} rows
     * @param {number} cols
     * @returns {number}
     */
    dfs(grid, r, c, visits, rows, cols) {
        if (
            r < 0 ||
            c < 0 ||
            r === rows ||
            c === cols ||
            grid[r][c] === 1 ||
            visits.has(`${r}-${c}`)
        ) {
            return 0;
        }

        if (r === rows - 1 && c === cols - 1) {
            return 1;
        }

        let count = 0;
        visits.add(`${r}-${c}`);

        count += this.dfs(grid, r + 1, c, visits, rows, cols);
        count += this.dfs(grid, r - 1, c, visits, rows, cols);
        count += this.dfs(grid, r, c + 1, visits, rows, cols);
        count += this.dfs(grid, r, c - 1, visits, rows, cols);

        visits.delete(`${r}-${c}`);

        return count;
    }
}
