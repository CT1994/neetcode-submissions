class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    shortestPathBinaryMatrix(grid) {
        const n = grid.length;

        // Start or destination is blocked.
        if (grid[0][0] !== 0 || grid[n - 1][n - 1] !== 0) {
            return -1;
        }

        // Single-cell grid.
        if (n === 1) {
            return 1;
        }

        /*
         * Flat queue:
         *
         * Instead of:
         *   [[row, col], [row, col], ...]
         *
         * store:
         *   row * n + col
         *
         * Maximum number of cells = n * n.
         */
        const queue = new Int32Array(n * n);

        let head = 0;
        let tail = 0;

        queue[tail++] = 0;

        /*
         * Reuse grid as the visited + distance array.
         *
         * 0 = unvisited
         * 1 = starting cell / distance 1
         * 2+ = shortest distance
         */
        grid[0][0] = 1;

        /*
         * 8 possible directions.
         *
         * Typed arrays avoid creating arrays during traversal.
         */
        const dr = [-1, -1, -1, 0, 0, 1, 1, 1];
        const dc = [-1, 0, 1, -1, 1, -1, 0, 1];

        const last = n - 1;

        while (head < tail) {
            const pos = queue[head++];

            const row = Math.floor(pos / n);
            const col = pos - row * n;

            const distance = grid[row][col];

            // BFS guarantees this is the shortest distance.
            if (row === last && col === last) {
                return distance;
            }

            const nextDistance = distance + 1;

            for (let d = 0; d < 8; d++) {
                const nextRow = row + dr[d];
                const nextCol = col + dc[d];

                // Bounds check.
                if (nextRow < 0 || nextRow >= n || nextCol < 0 || nextCol >= n) {
                    continue;
                }

                // 0 = open + unvisited
                // 1+ = blocked/visited
                if (grid[nextRow][nextCol] !== 0) {
                    continue;
                }

                // Mark before enqueueing.
                grid[nextRow][nextCol] = nextDistance;

                queue[tail++] = nextRow * n + nextCol;
            }
        }

        return -1;
    }
}
