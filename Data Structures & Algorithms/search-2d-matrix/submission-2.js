class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let l = 0;
        let r = matrix[0].length - 1;
        let arr = null;

        for (let i = 0; i < matrix.length; i++) {
            if (target <= matrix[i][r]) {
                arr = matrix[i];
                break;
            }
        }

        while (arr && l <= r) {
            const m = Math.floor((r + l) / 2);

            if (target > arr[m]) {
                l = m + 1
            }
            else if (target < arr[m]) {
                r = m - 1;
            }
            else {
                return true
            }
        }

        return false
    }
}
