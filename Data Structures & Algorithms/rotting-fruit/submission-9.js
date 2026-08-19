class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        const rows = grid.length;
        const cols = grid[0].length;
        let fresh = 0;
        let q = new Queue();

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                switch (grid[r][c]) {
                    case 1:
                        fresh++;
                        break;
                    case 2:
                        q.push([r, c]);
                        break;
                }
            }
        }

        const directions = [
            [1, 0],
            [0, 1],
            [-1, 0],
            [0, -1],
        ];
        let time = 0;

        while (fresh > 0 && !q.isEmpty()) {
            const length = q.size();
            for (let i = 0; i < length; i++) {
                const [cr, cc] = q.pop();

                for (const [dr, dc] of directions) {
                    const r = cr + dr;
                    const c = cc + dc;

                    if (r < 0 || c < 0 || r === rows || c === cols || grid[r][c] !== 1) {
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
