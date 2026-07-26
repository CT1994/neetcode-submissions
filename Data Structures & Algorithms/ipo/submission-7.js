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
            projects[i] = [capital[i], profits[i]];
        }

        const minCost = new PriorityQueue((a, b) => a[0] - b[0], projects);
        const maxProfits = new PriorityQueue((a, b) => b[1] - a[1]);

        for (let i = 0; i < k; i++) {
            while (!minCost.isEmpty() && minCost.front()[0] <= w) {
                maxProfits.push(minCost.pop());
            }

            if (maxProfits.isEmpty()) break;
            w += maxProfits.pop()[1];
        }

        return w;
    }
}
