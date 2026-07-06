class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        const rows = matrix.length;
        const cols = matrix[0].length;

        let l = 0;
        let r = rows * cols - 1;

        while (l <= r) {
            const m = l + Math.floor((r - l) / 2);
            const row = Math.floor(m / cols);
            const col = m % cols;

            if (matrix[row][col] === target) {
                return true;
            }
            else if (matrix[row][col] < target) {
                l = m + 1;
            }
            else {
                r = m - 1;
            }
        }

        return false;
    }
}
