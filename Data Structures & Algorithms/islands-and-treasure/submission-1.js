class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        const INF = 2147483647;
        const ROWS = grid.length;
        const COLS = grid[0].length;
        const stack = [];
        const visited = new Set();
        const directions = [
            [1, 0],
            [0, 1],
            [-1, 0],
            [0, -1],
        ];

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (grid[r][c] === 0) {
                    stack.push([r, c]);
                    visited.add(r * COLS + c)
                }
                else if (grid[r][c] === -1) {
                    visited.add(r * COLS + c);
                }
            }
        }

        let distance = 0;

        while (stack.length) {
            const length = stack.length;
            for (let i = 0; i < length; i++) {
                const [r, c] = stack.shift();
                if (grid[r][c] === INF) {
                    grid[r][c] = distance;
                }

                visited.add(r * COLS + c);

                for (const [dr, dc] of directions) {
                    const nr = r + dr;
                    const nc = c + dc;
                    if (
                        nr < 0 ||
                        nc < 0 ||
                        nr === ROWS ||
                        nc === COLS ||
                        visited.has(nr * COLS + nc)
                    ) {
                        continue;
                    }

                    stack.push([nr, nc]);
                }
            }

            distance++;
        }

        return grid;
    }
}
