class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    shortestPathBinaryMatrix(grid) {
        const n = grid.length;
        if (grid[0][0] === 1 || grid[n - 1][n - 1]) return -1;

        const directions = [
            [1, 0],
            [0, 1],
            [-1, 0],
            [0, -1],
            [1, 1],
            [-1, 1],
            [1, -1],
            [-1, -1],
        ];
        const q = new Queue();
        q.push([0, 0]);
        grid[0][0] = 1;
        let res = 1;
        while (!q.isEmpty()) {
            const length = q.size();
            for (let i = 0; i < length; i++) {
                const [cr, cc] = q.pop();
                if (cr === n - 1 && cc === n - 1) return res;
                for (const [dr, dc] of directions) {
                    const r = cr + dr;
                    const c = cc + dc;
                    if (r < 0 || c < 0 || r === n || c === n || grid[r][c] === 1) {
                        continue;
                    }

                    q.push([r, c]);
                    grid[r][c] = 1;
                }
            }
            res++;
        }

        return -1;
    }
}
