class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    shortestPathBinaryMatrix(grid) {
        const ROWS = grid.length;
        const COLS = grid[0].length;

        if (grid[0][0] === 1 || grid[ROWS - 1][COLS - 1]) {
            return -1;
        }

        const queue = [];
        const visit = new Set();

        queue.push([0, 0]);
        visit.add(0);
        let length = 1;

        while (queue.length) {
            const queueLength = queue.length;
            for (let i = 0; i < queueLength; i++) {
                const [r, c] = queue.shift();
                if (r === ROWS - 1 && c === COLS - 1) {
                    return length;
                }

                const neighbors = [
                    [r - 1, c],
                    [r + 1, c],
                    [r, c - 1],
                    [r, c + 1],
                    [r - 1, c - 1],
                    [r + 1, c + 1],
                    [r + 1, c - 1],
                    [r - 1, c + 1],
                ];
                while (neighbors.length) {
                    const [r, c] = neighbors.shift();
                    if (
                        r < 0 ||
                        c < 0 ||
                        r >= ROWS ||
                        c >= COLS ||
                        visit.has(r * COLS + c) ||
                        grid[r][c] === 1
                    ) {
                        continue;
                    }

                    visit.add(r * COLS + c);
                    queue.push([r, c]);
                }
            }
            length++
        }

        return -1;
    }
}
