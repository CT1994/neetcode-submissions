class Solution {
    /**
     * @param {number} n
     * @param {number[][]} flights
     * @param {number} src
     * @param {number} dst
     * @param {number} k
     * @return {number}
     */
    findCheapestPrice(n, flights, src, dst, k) {
        const adj = Array.from({ length: n }, () => []);
        for (const [src, dst, cost] of flights) {
            adj[src].push([dst, cost]);
        }

        const minHeap = new MinPriorityQueue((entry) => entry[0]);
        minHeap.push([0, src, -1]);

        while (!minHeap.isEmpty()) {
            const [cost, node, stops] = minHeap.pop();
            if (node === dst) {
                return cost;
            }
            if (stops === k) {
                continue;
            }
            for (let [nei, w] of adj[node]) {
                const nextCost = cost + w;
                const nextStops = stops + 1;
                minHeap.push([nextCost, nei, nextStops]);
            }
        }
        return -1;
    }
}
