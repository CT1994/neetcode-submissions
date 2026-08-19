class Solution {
    /**
     * @param {number[][]} grid
     * @returns {number}
     */
    countPaths(grid) {
        const rows = grid.length;
        const cols = grid[0].length;

        const dfs = (r, c) => {
            if (r < 0 || c < 0 || r === rows || c === cols || grid[r][c] === 1) {
                return 0;
            }

            if (r === rows - 1 && c === cols - 1) {
                return 1;
            }

            grid[r][c] = 1;
            let count = 0;
            count += dfs(r + 1, c);
            count += dfs(r, c + 1);
            count += dfs(r - 1, c);
            count += dfs(r, c - 1);
            grid[r][c] = 0;
            return count;
        };

        return dfs(0, 0);
    }
}
