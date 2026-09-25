class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    swimInWater(grid) {
        const ROWS = grid.length;
        const COLS = grid[0].length;

        const q = new MinPriorityQueue((val) => val[2]);
        q.push([0, 0, grid[0][0]]);
        const visit = new Set();
        visit.add(0);
        const directions = [
            [1, 0],
            [0, 1],
            [-1, 0],
            [0, -1],
        ];

        while (!q.isEmpty()) {
            const [cr, cc, t] = q.pop();
            if (cr === ROWS - 1 && cc === COLS - 1) {
                return t;
            }

            for (const [dr, dc] of directions) {
                const r = cr + dr;
                const c = cc + dc;
                const key = r * COLS + c;
                if (r < 0 || c < 0 || r === ROWS || c === COLS || visit.has(key)) {
                    continue;
                }
                q.push([r, c, Math.max(t, grid[r][c])]);
                visit.add(key);
            }
        }
    }
}
