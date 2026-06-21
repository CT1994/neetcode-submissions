class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        const cache = {};
        const dfs = (i, buying) => {
            if (i === prices.length) return 0;

            const key = `${i}-${buying}`;
            if (cache[key]) {
                return cache[key]
            }
            let profit = 0;
            let skip = dfs(i + 1, buying);
            if (buying) {
                const buy = dfs(i + 1, false) - prices[i];
                profit = Math.max(profit, buy)
            }
            else {
                const sell = prices[i] + dfs(i + 1, true);
                profit = Math.max(profit, sell)
            }

            return cache[key] = Math.max(profit, skip)
        }

        return dfs(0, true)
    }
}
