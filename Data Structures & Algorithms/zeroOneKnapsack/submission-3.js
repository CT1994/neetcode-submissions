class Solution {
    /**
     * @param {<Array<number>} profit
     * @param {<Array<number>} weight
     * @param {number} capacity
     * @returns {number}
     */
    maximumProfit(profit, weight, capacity) {
        const rows = profit.length;
        const cols = capacity + 1;
        let dp = new Array(cols).fill(0);

        for (let c = 0; c < cols; c++) {
            if (weight[0] <= c) {
                dp[c] = profit[0];
            }
        }

        for (let r = 1; r < rows; r++) {
            const curRow = new Array(cols).fill(0);
            for (let c = 1; c < cols; c++) {
                const skip = dp[c];
                let include = 0;
                if (c - weight[r] >= 0) {
                    include = profit[r] + dp[c - weight[r]];
                }
                curRow[c] = Math.max(skip, include);
            }
            dp = curRow;
        }

        return dp[cols - 1];
    }
}
