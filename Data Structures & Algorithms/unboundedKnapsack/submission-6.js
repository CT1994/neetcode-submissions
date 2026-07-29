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
        const dp = Array.from({ length: rows }, () => new Array(cols).fill(-1));
        const dfs = (i, capacity) => {
            if (i === profit.length) return 0;
            if (dp[i][capacity] !== -1) return dp[i][capacity];

            const skip = dfs(i + 1, capacity);
            let include = 0;
            const newCapacity = capacity - weight[i];
            if (newCapacity >= 0) {
                include = profit[i] + dfs(i, newCapacity);
            }

            return (dp[i][capacity] = Math.max(skip, include));
        };

        return dfs(0, capacity);
    }
}
