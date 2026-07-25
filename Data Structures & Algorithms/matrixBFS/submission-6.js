class Solution {
    /**
     * @param {number[][]} grid
     * @returns {number}
     */
    shortestPath(grid) {
        const rows = grid.length;
        const cols = grid[0].length;

        // Base checks
        if (grid[0][0] === 1 || grid[rows - 1][cols - 1] === 1) return -1;
        if (rows === 1 && cols === 1) return 0;

        // Flatten 2D coordinates into a single integer array queue.
        // Fast pre-allocated typed array to avoid GC overhead.
        const maxCapacity = rows * cols;
        const q = new Int32Array(maxCapacity);
        let head = 0;
        let tail = 0;

        // Push start node (0) and mark as visited
        q[tail++] = 0;
        grid[0][0] = 1;

        let steps = 0;

        while (head < tail) {
            let size = tail - head;
            steps++;

            while (size--) {
                const curr = q[head++];
                const cr = (curr / cols) | 0; // Bitwise floor for integer division
                const cc = curr % cols;

                // 1. Down
                let nr = cr + 1;
                if (nr < rows && grid[nr][cc] === 0) {
                    if (nr === rows - 1 && cc === cols - 1) return steps;
                    grid[nr][cc] = 1;
                    q[tail++] = nr * cols + cc;
                }

                // 2. Right
                let nc = cc + 1;
                if (nc < cols && grid[cr][nc] === 0) {
                    if (cr === rows - 1 && nc === cols - 1) return steps;
                    grid[cr][nc] = 1;
                    q[tail++] = cr * cols + nc;
                }

                // 3. Up
                nr = cr - 1;
                if (nr >= 0 && grid[nr][cc] === 0) {
                    grid[nr][cc] = 1;
                    q[tail++] = nr * cols + cc;
                }

                // 4. Left
                nc = cc - 1;
                if (nc >= 0 && grid[cr][nc] === 0) {
                    grid[cr][nc] = 1;
                    q[tail++] = cr * cols + nc;
                }
            }
        }

        return -1;
    }
}
