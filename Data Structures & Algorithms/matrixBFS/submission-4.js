class Solution {
    /**
     * @param {number[][]}
     * @returns {number}
     */
    shortestPath(grid) {
        const rows = grid.length;
        const cols = grid[0].length;
        const directions = [
            [1, 0],
            [0, 1],
            [-1, 0],
            [0, -1],
        ];
        let shortestPath = 0;
        const visit = new Set();
        const q = new Queue();
        visit.add(0);
        q.push([0, 0]);

        while (!q.isEmpty()) {
            const length = q.size();
            for (let i = 0; i < length; i++) {
                const [r, c] = q.pop();
                if (r === rows - 1 && c === cols - 1) {
                    return shortestPath;
                }

                for (const [dr, dc] of directions) {
                    const nr = r + dr;
                    const nc = c + dc;

                    if (
                        nr < 0 ||
                        nc < 0 ||
                        nr === rows ||
                        nc === cols ||
                        grid[nr][nc] === 1 ||
                        visit.has(nr * cols + nc)
                    ) {
                        continue;
                    }

                    q.push([nr, nc]);
                    visit.add(nr * cols + nc);
                }
            }
            shortestPath++;
        }

        return -1;
    }
}
