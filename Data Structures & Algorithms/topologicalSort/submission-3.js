class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number[]}
     */
    topologicalSort(n, edges) {
        const adjList = Array.from({ length: n }, () => []);
        for (const [u, v] of edges) {
            adjList[v].push(u);
        }

        const visit = new Set();
        const path = new Set();
        const topSort = [];
        const dfs = (i) => {
            if (path.has(i)) return false;
            if (visit.has(i)) return true;
            path.add(i);
            for (const n of adjList[i]) {
                if (!dfs(n)) return false;
            }
            path.delete(i);
            visit.add(i);
            topSort.push(i);
            return true;
        };

        for (let i = 0; i < n; i++) {
            if (!dfs(i)) return [];
        }

        return topSort;
    }
}
