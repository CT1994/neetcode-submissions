class Solution {
    /**
     * @param {number[][]}
     * @returns {number}
     */
    shortestPath(grid) {
        if (grid.length === 0) {
            return -1;
        }

        const ROWS = grid.length;
        const COLS = grid[0].length;
        const queue = [];
        const visit = new Set();

        queue.push([0, 0]);
        visit.add("0-0");
        let length = 0;

        while (queue.length > 0) {
            const queueLength = queue.length;
            for (let i = 0; i < queueLength; i++) {
                const [r, c] = queue.shift();
                if (r === ROWS - 1 && c === COLS - 1) {
                    return length
                }
                const neighbors = [
                    [r + 1, c],
                    [r - 1, c],
                    [r, c + 1],
                    [r, c - 1],
                ];
                while (neighbors.length > 0) {
                    const [r, c] = neighbors.pop();
                    if (
                        r < 0 ||
                        c < 0 ||
                        r >= ROWS ||
                        c >= COLS ||
                        grid[r][c] === 1 ||
                        visit.has(`${r}-${c}`)
                    ) {
                        continue;
                    }
                    queue.push([r, c]);
                    visit.add(`${r}-${c}`);
                }
            }
            length++
        }

        return -1
    }
}
