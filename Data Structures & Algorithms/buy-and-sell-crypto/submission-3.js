class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let max = 0;
        let l = 0;
        let r = 0;
        while (r < prices.length) {
            const profit = prices[r] - prices[l];
            if (profit < 0) {
                l = r;
            }
            max = Math.max(max, profit);
            r++;
        }
        return max;
    }
}
