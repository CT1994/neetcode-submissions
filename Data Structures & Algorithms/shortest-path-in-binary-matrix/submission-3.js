class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    shortestPathBinaryMatrix(grid) {
        const rows = grid.length;
        const cols = grid[0].length;
        if (grid[0][0] === 1 || grid[rows - 1][cols - 1] === 1) {
            return -1;
        }

        const directions = [
            [1, 0],
            [0, 1],
            [-1, 0],
            [0, -1],
            [1, 1],
            [1, -1],
            [-1, 1],
            [-1, -1],
        ];

        let res = 1;
        const q = new Queue();
        q.push([0, 0]);

        while (!q.isEmpty()) {
            const length = q.size();
            for (let i = 0; i < length; i++) {
                const [or, oc] = q.pop();
                if (or === rows - 1 && oc === cols - 1) {
                    return res;
                }

                for (const [dr, dc] of directions) {
                    const r = or + dr;
                    const c = oc + dc;

                    if (r < 0 || c < 0 || r === rows || c === cols || grid[r][c] === 1) {
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
