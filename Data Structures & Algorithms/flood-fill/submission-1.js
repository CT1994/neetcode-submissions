class Solution {
    /**
     * @param {number[][]} image
     * @param {number} sr
     * @param {number} sc
     * @param {number} color
     * @return {number[][]}
     */
    floodFill(image, sr, sc, color) {
        const rows = image.length;
        const cols = image[0].length;
        const visit = new Set();

        const dfs = (r, c, prev) => {
            if (
                r < 0 ||
                c < 0 ||
                r === rows ||
                c === cols ||
                visit.has(r * cols + c) ||
                image[r][c] !== prev
            ) {
                return;
            }

            const tmp = image[r][c];
            visit.add(r * cols + c);
            image[r][c] = color;
            dfs(r + 1, c, tmp);
            dfs(r, c + 1, tmp);
            dfs(r - 1, c, tmp);
            dfs(r, c - 1, tmp);
        };

        dfs(sr, sc, image[sr][sc]);
        return image;
    }
}
