class Solution {
    /**
     * @param {number[][]} image
     * @param {number} sr
     * @param {number} sc
     * @param {number} color
     * @return {number[][]}
     */
    floodFill(image, sr, sc, color) {
        const orig = image[sr][sc];
        if (orig === color) return image;

        const rows = image.length;
        const cols = image[0].length;

        const directions = [
            [1, 0],
            [0, 1],
            [-1, 0],
            [0, -1],
        ];
        const q = new Queue();
        q.push([sr, sc]);
        image[sr][sc] = color;

        while (!q.isEmpty()) {
            const length = q.size();
            for (let i = 0; i < length; i++) {
                const [cr, cc] = q.pop();

                for (const [dr, dc] of directions) {
                    const r = cr + dr;
                    const c = cc + dc;
                    if (r < 0 || c < 0 || r === rows || c === cols || orig !== image[r][c]) {
                        continue;
                    }
                    image[r][c] = color;
                    q.push([r, c, image[r][c]]);
                }
            }
        }

        return image;
    }
}
