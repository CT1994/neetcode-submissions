class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        const rows = grid.length;
        const cols = grid[0].length;
        let islands = 0;

        const dfs = (r, c) => {
            if (r < 0 || c < 0 || r === rows || c === cols || grid[r][c] === 0) {
                return 0;
            }

            grid[r][c] = 0;
            let res = 1;
            res += dfs(r + 1, c);
            res += dfs(r, c + 1);
            res += dfs(r - 1, c);
            res += dfs(r, c - 1);

            return res;
        };

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                islands = Math.max(islands, dfs(r, c));
            }
        }

        return islands;
    }
}
