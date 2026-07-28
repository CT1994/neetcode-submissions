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
        const minHeap = new MinPriorityQueue((val) => val[0]);
        minHeap.push([grid[0][0], 0, 0]);
        while (!minHeap.isEmpty()) {
            const [w, r1, c1] = minHeap.pop();
            if (r1 === rows - 1 && c1 === cols - 1) {
                return w;
            }

            for (const [r2, c2] of directions) {
                const r = r1 + r2;
                const c = c1 + c2;
                if (r < 0 || c < 0 || r === rows || c === cols || grid[r][c] === -1) {
                    continue;
                }

                minHeap.push([Math.max(grid[r][c], w), r, c]);
                grid[r][c] = -1;
            }
        }
    }
}
