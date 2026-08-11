class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    swimInWater(grid) {
        const rows = grid.length;
        const cols = grid[0].length;
        const directions = [
            [1, 0],
            [0, 1],
            [-1, 0],
            [0, -1],
        ];
        const visit = new Set();
        const minHeap = new MinPriorityQueue((val) => val[0]);
        minHeap.push([grid[0][0], 0, 0]);
        while (!minHeap.isEmpty()) {
            const [w, cr, cc] = minHeap.pop();
            if (cr === rows - 1 && cc === cols - 1) return w;

            for (const [dr, dc] of directions) {
                const r = cr + dr;
                const c = cc + dc;
                const key = r * cols + c;
                if (r < 0 || c < 0 || r === rows || c === cols || visit.has(key)) {
                    continue;
                }
                visit.add(key);
                minHeap.push([Math.max(grid[r][c], w), r, c]);
            }
        }
    }
}
