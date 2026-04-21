class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    uniquePathsWithObstacles(grid) {
        const rows = grid.length;
        const cols = grid[0].length;
        return this.dp(grid);
    }

    dfs(grid, r, c, rows, cols) {
        if (r === rows || c === cols || grid[r][c] === 1) {
            return 0;
        }

        if (r === rows - 1 && c === cols - 1) {
            return 1;
        }

        return this.dfs(grid, r + 1, c, rows, cols) + this.dfs(grid, r, c + 1, rows, cols);
    }

    memoization(grid, r, c, rows, cols, cache) {
        if (r === rows || c === cols || grid[r][c] === 1) {
            return 0;
        }

        if (cache[r * cols + c]) {
            return cache[r * cols + c]
        }

        if (r === rows - 1 && c === cols - 1) {
            return 1;
        }

        cache[r * cols + c] =
            this.memoization(grid, r + 1, c, rows, cols, cache) +
            this.memoization(grid, r, c + 1, rows, cols, cache);

        return cache[r * cols + c];
    }

    dp(grid) {
        const rows = grid.length;
        const cols = grid[0].length;
        let dp = new Array(cols).fill(0)
        dp[cols-1] = 1
        
        for (let i = rows - 1; i >= 0; i--) {
            for (let j = cols - 1; j >= 0; j--) {
                if (grid[i][j] === 1) {
                    dp[j] = 0
                }
                else if (j + 1 < cols) {
                    dp[j] = dp[j] + dp[j + 1]
                }
            }
        }

        return dp[0]
    }
}
