class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        const q = new Queue();
        let time = 0;
        let fresh = 0;

        for (let r = 0; r < grid.length; r++) {
            for (let c = 0; c < grid[0].length; c++) {
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

        while (fresh > 0 && !q.isEmpty()) {
            const length = q.size();
            for (let i = 0; i < length; i++) {
                const [or, oc] = q.pop();

                for (const [dr, dc] of directions) {
                    const r = or + dr;
                    const c = oc + dc;

                    if (
                        r < 0 ||
                        c < 0 ||
                        r === grid.length ||
                        c === grid[0].length ||
                        grid[r][c] !== 1
                    ) {
                        continue;
                    }

                    q.push([r, c]);
                    grid[r][c] = 2;
                    fresh--;
                }
            }
            time++;
        }

        return fresh === 0 ? time : -1;
    }
}
