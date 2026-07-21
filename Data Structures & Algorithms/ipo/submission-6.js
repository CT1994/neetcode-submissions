class Solution {
    /**
     * @param {number} k
     * @param {number} w
     * @param {number[]} profits
     * @param {number[]} capital
     * @return {number}
     */
    findMaximizedCapital(k, w, profits, capital) {
        const minCapital = new MinPriorityQueue(val => val.capital);
        const maxProfit = new MaxPriorityQueue(val => val.profit);

        for (let i = 0; i < profits.length; i++) {
            minCapital.push({capital: capital[i], profit: profits[i]});
        }

        for (let i = 0; i < k; i++) {
            while (!minCapital.isEmpty() && minCapital.front().capital <= w) {
                maxProfit.push(minCapital.pop());
            }

            if (maxProfit.isEmpty()) {
                break;
            }
            w += maxProfit.pop().profit;
        }

        return w;
    }
}
