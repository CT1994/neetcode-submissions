class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        const rows = grid.length;
        const cols = grid[0].length;

        const dfs = (r, c) => {
            if (r < 0 || c < 0 || r === rows || c === cols || grid[r][c] === "0") {
                return;
            }

            grid[r][c] = "0";
            dfs(r + 1, c);
            dfs(r, c + 1);
            dfs(r - 1, c);
            dfs(r, c - 1);
        };

        let res = 0;
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (grid[r][c] === "1") {
                    dfs(r, c);
                    res++;
                }
            }
        }

        return res;
    }
}
