class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    uniquePathsWithObstacles(grid) {
        const ROWS = grid.length;
        const COLS = grid[0].length;
        const dp = Array.from({ length: ROWS }, () => new Array(COLS).fill(-1));

        const dfs = (r, c) => {
            if (r === ROWS || c === COLS || grid[r][c] === 1) return 0;
            if (dp[r][c] !== -1) return dp[r][c];
            if (r === ROWS - 1 && c === COLS - 1) return 1;
            return (dp[r][c] = dfs(r + 1, c) + dfs(r, c + 1));
        };

        return dfs(0, 0);
    }
}
