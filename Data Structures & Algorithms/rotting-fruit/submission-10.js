class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        const ROWS = grid.length;
        const COLS = grid[0].length;

        let time = 0;
        let fresh = 0;
        const q = new Queue();

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (grid[r][c] === 1) {
                    fresh++;
                } else if (grid[r][c] === 2) {
                    q.push([r, c]);
                }
            }
        }

        const directions = [
            [1, 0],
            [0, 1],
            [-1, 0],
            [0, -1],
        ];

        console.log(fresh);

        while (fresh > 0 && !q.isEmpty()) {
            const len = q.size();
            for (let i = 0; i < len; i++) {
                const [cr, cc] = q.pop();

                for (const [dr, dc] of directions) {
                    const r = cr + dr;
                    const c = cc + dc;
                    if (r < 0 || c < 0 || r === ROWS || c === COLS || grid[r][c] !== 1) {
                        continue;
                    }

                    fresh--;
                    grid[r][c] = 2;
                    q.push([r, c]);
                }
            }
            time++;
        }

        return fresh === 0 ? time : -1;
    }
}
