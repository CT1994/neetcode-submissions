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

            grid[r][c] = 1
            let res = 0;
            res += dfs(r + 1, c);
            res += dfs(r, c + 1);
            res += dfs(r - 1, c);
            res += dfs(r, c - 1);
            grid[r][c] = 0

            return res;
        };

        return dfs(0, 0);
    }
}
