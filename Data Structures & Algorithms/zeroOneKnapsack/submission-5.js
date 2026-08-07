class Solution {
    /**
     * @param {<Array<number>} profit
     * @param {<Array<number>} weight
     * @param {number} capacity
     * @returns {number}
     */
    maximumProfit(profit, weight, capacity) {
        const dp = Array.from({ length: profit.length }, () => new Array(capacity + 1).fill(-1));
        const dfs = (i, capacity) => {
            if (i === profit.length) return 0;
            if (dp[i][capacity] !== -1) return dp[i][capacity];

            let skip = dfs(i + 1, capacity);
            let include = 0;
            const newCapacity = capacity - weight[i];
            if (newCapacity >= 0) include = profit[i] + dfs(i + 1, newCapacity);

            return (dp[i][capacity] = Math.max(skip, include));
        };

        return dfs(0, capacity);
    }
}
