class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    shortestPathBinaryMatrix(grid) {
        if (grid[0][0] === 1) return -1;

        const ROWS = grid.length;
        const COLS = grid[0].length;

        const directions = [
            [1, 0],
            [0, 1],
            [-1, 0],
            [0, -1],
            [-1, -1],
            [-1, 1],
            [1, -1],
            [1, 1],
        ];

        let shortestPath = 1;
        const q = new Queue();
        q.push([0, 0]);
        grid[0][0] = 1;

        while (!q.isEmpty()) {
            const length = q.size();
            for (let i = 0; i < length; i++) {
                const [cr, cc] = q.pop();
                if (cr === ROWS - 1 && cc === COLS - 1) {
                    return shortestPath;
                }

                for (const [dr, dc] of directions) {
                    const r = cr + dr;
                    const c = cc + dc;
                    if (r < 0 || c < 0 || r === ROWS || c === COLS || grid[r][c] === 1) {
                        continue;
                    }

                    q.push([r, c]);
                    grid[r][c] = 1;
                }
            }
            shortestPath++;
        }

        return -1;
    }
}
