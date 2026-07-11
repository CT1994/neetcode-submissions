class Solution {
    /**
     * @param {number[][]} grid
     * @returns {number}
     */
    countPaths(grid) {
        const rows = grid.length;
        const cols = grid[0].length;
        let res = 0;

        const dfs = (r, c) => {
            if (r < 0 || c < 0 || r === rows || c === cols || grid[r][c] === 1) {
                return;
            }

            if (r === rows - 1 && c === cols - 1) {
                res++;
                return;
            }

            grid[r][c] = 1;
            dfs(r + 1, c);
            dfs(r, c + 1);
            dfs(r - 1, c);
            dfs(r, c - 1);
            grid[r][c] = 0;
        };

        dfs(0, 0);
        return res;
    }
}
