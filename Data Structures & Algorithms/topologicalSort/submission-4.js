class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number[]}
     */
    topologicalSort(n, edges) {
        const adjList = Array.from({ length: n }, () => []);
        for (const [src, dst] of edges) {
            adjList[dst].push(src);
        }

        const topSort = [];
        const visit = new Set();
        const path = new Set();
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
