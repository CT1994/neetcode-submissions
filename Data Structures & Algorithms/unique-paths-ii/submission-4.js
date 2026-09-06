class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    uniquePathsWithObstacles(grid) {
        let rows = grid.length;
        let cols = grid[0].length;
        let visit = new Set();

        const dp = Array.from({ length: rows }, () => new Array(cols).fill(-1));
        const dfs = (r, c) => {
            if (
                r < 0 ||
                c < 0 ||
                r === rows ||
                c === cols ||
                visit.has(r * cols + c) ||
                grid[r][c] === 1
            ) {
                return 0;
            }

            if (r === rows - 1 && c === cols - 1) return 1;
            if (dp[r][c] !== -1) return dp[r][c]            
            return (dp[r][c] = dfs(r + 1, c) + dfs(r, c + 1));
        };
        return dfs(0, 0);
    }
}
