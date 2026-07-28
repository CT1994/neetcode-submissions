class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    uniquePathsWithObstacles(grid) {
        const rows = grid.length;
        const cols = grid[0].length;
        if (grid[0][0] === 1 || grid[rows - 1][cols - 1] === 1) return 0;
        const dp = Array.from({ length: rows }, () => new Array(cols).fill(-1));
        const dfs = (r, c) => {
            if (r < 0 || c < 0 || r === rows || c === cols || grid[r][c] === 1) return 0;
            if (r === rows - 1 && c === cols - 1) return 1;
            if (dp[r][c] !== -1) return dp[r][c];
            dp[r][c] = dfs(r + 1, c) + dfs(r, c + 1);
            return dp[r][c];
        };
        return dfs(0, 0);
    }
}
