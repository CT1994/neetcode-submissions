class Solution {
    /**
     * @param {number} k
     * @param {number} w
     * @param {number[]} profits
     * @param {number[]} capital
     * @return {number}
     */
    findMaximizedCapital(k, w, profits, capital) {
        const projects = new Array(profits.length);
        for (let i = 0; i < profits.length; i++) {
            projects[i] = ([capital[i], profits[i]]);
        }
        const minHeap = new PriorityQueue((a, b) => a[0] - b[0], projects);
        const maxHeap = new MaxPriorityQueue((val) => val[1]);
        while (k) {
            while (!minHeap.isEmpty() && w >= minHeap.front()[0]) {
                maxHeap.push(minHeap.pop())
            }

            if (maxHeap.size() === 0) {
                break
            }

            w += maxHeap.pop()[1];
            k--
        }

        return w;
    }
}
