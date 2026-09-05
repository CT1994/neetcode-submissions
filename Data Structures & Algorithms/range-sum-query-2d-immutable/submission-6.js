class NumMatrix {
    /**
     * @param {number[][]} matrix
     */
    constructor(matrix) {
        const rows = matrix.length;
        const cols = matrix[0].length;
        this.prefix = Array.from({ length: rows + 1 }, () => new Array(cols + 1).fill(0));
        for (let r = 0; r < rows; r++) {
            let prefix = 0;
            for (let c = 0; c < cols; c++) {
                prefix += matrix[r][c];
                this.prefix[r + 1][c + 1] = prefix + this.prefix[r][c + 1];
            }
        }
    }

    /**
     * @param {number} row1
     * @param {number} col1
     * @param {number} row2
     * @param {number} col2
     * @return {number}
     */
    sumRegion(row1, col1, row2, col2) {
        row1++;
        col1++;
        row2++;
        col2++;
        const top = this.prefix[row1 - 1][col2];
        const left = this.prefix[row2][col1 - 1];
        const topLeft = this.prefix[row1 - 1][col1 - 1];
        const bottomRight = this.prefix[row2][col2];
        return bottomRight + topLeft - top - left;
    }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
