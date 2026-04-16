class Solution {
    /**
     * @param {number[][]} grid
     * @returns {number}
     */
    countPaths(grid) {
        return this.dfs(grid, 0, 0, new Set())
    }

    /**
     *
     */
    dfs(grid, r, c, paths) {
        const ROWS = grid.length;
        const COLS = grid[0].length;

        if (
            Math.min(r, c) < 0 ||
            r === ROWS ||
            c === COLS ||
            paths.has(`${r}-${c}`) ||
            grid[r][c] === 1
        ) {
            return 0;
        }

        if (r === ROWS -1 && c === COLS - 1) {
            return 1
        }

        let count = 0
        paths.add(`${r}-${c}`);

        count += this.dfs(grid, r, c - 1, paths)
        count += this.dfs(grid, r, c + 1, paths)
        count += this.dfs(grid, r - 1, c, paths)
        count += this.dfs(grid, r + 1, c, paths)

        paths.delete(`${r}-${c}`)

        return count;
    }
}
