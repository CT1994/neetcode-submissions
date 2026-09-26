class Solution {
    /**
     * @param {number} k
     * @param {number} w
     * @param {number[]} profits
     * @param {number[]} capital
     * @return {number}
     */
    findMaximizedCapital(k, w, profits, capital) {
        const n = profits.length;
        const projects = new Array(n);
        for (let i = 0; i < n; i++) {
            projects[i] = [profits[i], capital[i]];
        }

        const minCapital = new PriorityQueue((a, b) => a[1] - b[1], projects);
        const maxProfit = new MaxPriorityQueue((val) => val[0]);
        while (k > 0) {
            while (!minCapital.isEmpty() && minCapital.front()[1] <= w) {
                maxProfit.push(minCapital.pop());
            }

            if (maxProfit.isEmpty()) {
                break;
            }

            w += maxProfit.pop()[0];
            k--;
        }

        return w;
    }
}
