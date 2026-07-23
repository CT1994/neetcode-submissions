class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    swimInWater(grid) {
        const rows = grid.length;
        const cols = grid[0].length;
        const minHeap = new MinPriorityQueue((val) => val[0]);
        const directions = [
            [1, 0],
            [0, 1],
            [-1, 0],
            [0, -1],
        ];
        minHeap.push([grid[0][0], 0, 0]);
        while (!minHeap.isEmpty()) {
            const [t, cr, cc] = minHeap.pop();
            if (cr === rows - 1 && cc === cols - 1) return t;

            for (const [dr, dc] of directions) {
                const r = cr + dr;
                const c = cc + dc;
                if (r < 0 || c < 0 || r === rows || c === cols || grid[r][c] === -1) {
                    continue;
                }

                minHeap.push([Math.max(t, grid[r][c]), r, c]);
                grid[r][c] = -1;
            }
        }
    }
}
