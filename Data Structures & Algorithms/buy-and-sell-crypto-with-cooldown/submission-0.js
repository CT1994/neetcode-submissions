class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        const cache = {};
        const dfs = (i, coin) => {
            if (i >= prices.length) {
                return 0;
            }

            const key = `${i}-${coin}`;

            if (key in cache) {
                return cache[key];
            }

            let profit = 0;

            if (coin === -1) {
                profit = Math.max(profit, dfs(i + 1, prices[i]), dfs(i + 1, -1));
            } else {
                profit = Math.max(profit, prices[i] - coin + dfs(i + 2, -1), dfs(i + 1, coin));
            }
            return (cache[key] = profit);
        };

        const res = dfs(0, -1);
        return res;
    }
}
