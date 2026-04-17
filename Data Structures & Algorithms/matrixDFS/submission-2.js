class Solution {
    countPaths(grid) {
        const rows = grid.length;
        const cols = grid[0].length;
        return this.dfs(grid, 0, 0, rows, cols);
    }

    dfs(grid, r, c, rows, cols) {
        // 1. Boundary and Obstacle Checks
        if (r < 0 || c < 0 || r >= rows || c >= cols || grid[r][c] === 1) {
            return 0;
        }

        // 2. Goal Check
        if (r === rows - 1 && c === cols - 1) {
            return 1;
        }

        // 3. Mark as visited (In-place)
        grid[r][c] = 1; 

        // 4. Explore
        let count = 0;
        count += this.dfs(grid, r + 1, c, rows, cols);
        count += this.dfs(grid, r - 1, c, rows, cols);
        count += this.dfs(grid, r, c + 1, rows, cols);
        count += this.dfs(grid, r, c - 1, rows, cols);

        // 5. Backtrack (Unmark)
        grid[r][c] = 0; 

        return count;
    }
}