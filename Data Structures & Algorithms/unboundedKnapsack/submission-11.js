class Solution {
    /**
     * @param {<Array<number>} profit
     * @param {<Array<number>} weight
     * @param {number} capacity
     * @returns {number}
     */
    maximumProfit(profit, weight, capacity) {
        const N = profit.length;
        const M = capacity + 1;
        const dp = Array.from({ length: N }, () => new Array(M).fill(0));

        for (let c = 0; c < M; c++) {
            if (weight[0] <= c) {
                dp[0][c] = Math.floor(c / weight[0]) * profit[0];
            }
        }

        for (let r = 1; r < N; r++) {
            for (let c = 1; c < M; c++) {
                const skip = dp[r - 1][c];
                let include = 0;
                if (c - weight[r] >= 0) {
                    include = profit[r] + dp[r][c - weight[r]];
                }
                dp[r][c] = Math.max(skip, include);
            }
        }

        return dp[N - 1][M - 1];
    }
}
