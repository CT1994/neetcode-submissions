class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        const ROWS = matrix.length;
        const COLS = matrix[0].length;

        let l = 0;
        let r = ROWS * COLS - 1;
        while (l <= r) {
            const m = l + Math.floor((r - l) / 2);
            const row = Math.floor(m / COLS);
            const col = m % COLS;
            if (matrix[row][col] === target) return true;

            if (matrix[row][col] < target) {
                l = m + 1;
            } else {
                r = m - 1;
            }
        }

        return false;
    }
}
