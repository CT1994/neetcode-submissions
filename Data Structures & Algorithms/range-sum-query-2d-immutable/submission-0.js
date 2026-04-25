class NumMatrix {
    /**
     * @param {number[][]} matrix
     */
    constructor(matrix) {
        this.prefix = [];

        for (let i = 0; i < matrix.length; i++) {
            this.prefix.push(new Array(matrix[0].length + 1).fill(0));
            for (let j = 0; j < matrix[0].length; j++) {
                this.prefix[i][j + 1] = matrix[i][j] + this.prefix[i][j]
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
        let res = 0;

        for (let i = row1; i <= row2; i++) {
            res += this.prefix[i][col2 + 1] - this.prefix[i][col1]
        }
        
        return res
    }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
