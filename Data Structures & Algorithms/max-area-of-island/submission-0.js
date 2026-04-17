class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        let largestIsland = 0;
        const rows = grid.length;
        const cols = grid[0].length;

        const dfs = (r, c) => {
            if (r < 0 || c < 0 || r >= rows || c >= cols || grid[r][c] === 0) {
                return 0;
            }
            grid[r][c] = 0;
            let count = 1;

            count += dfs(r - 1, c);
            count += dfs(r + 1, c);
            count += dfs(r, c - 1);
            count += dfs(r, c + 1);

            return count;
        };

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (grid[r][c] === 1) {
                    largestIsland = Math.max(largestIsland, dfs(r, c));
                }
            }
        }

        return largestIsland;
    }
}
