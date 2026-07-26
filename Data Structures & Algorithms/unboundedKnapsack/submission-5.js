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
        const dp = Array.from({ length: rows }, () => new Array(cols).fill(0));

        for (let c = 0; c < cols; c++) {
            if (weight[0] <= c) {
                dp[0][c] = Math.floor(c / weight[0]) * profit[0];
            }
        }

        for (let i = 1; i < rows; i++) {
            for (let c = 1; c < cols; c++) {
                let skip = dp[i - 1][c];
                let include = 0;
                if (c - weight[i] >= 0) {
                    include = profit[i] + dp[i][c - weight[i]];
                }
                dp[i][c] = Math.max(include, skip);
            }
        }
        return dp[rows - 1][cols - 1];
    }
}
