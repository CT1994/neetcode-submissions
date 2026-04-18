class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        const ROWS = grid.length;
        const COLS = grid[0].length;
        const queue = [];
        let freshCount = 0;
        let minutes = 0;

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (grid[r][c] === 1) {
                    freshCount++;
                } else if (grid[r][c] === 2) {
                    queue.push([r, c]);
                }
            }
        }

        while (freshCount > 0 && queue.length) {
            const queueLength = queue.length;
            for (let i = 0; i < queueLength; i++) {
                const [r, c] = queue.shift();
                let directions = [
                    [r - 1, c],
                    [r + 1, c],
                    [r, c - 1],
                    [r, c + 1],
                ];

                while (directions.length) {
                    const [r, c] = directions.pop();
                    if (
                        r < 0 ||
                        c < 0 ||
                        r >= ROWS ||
                        c >= COLS ||
                        grid[r][c] === 0 ||
                        grid[r][c] === 2
                    ) {
                        continue;
                    }

                    freshCount--;
                    grid[r][c] = 2;
                    queue.push([r, c]);
                }
            }
            minutes++;
        }

        return freshCount > 0 ? -1 : minutes;
    }
}
