class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number[]}
     */
    topologicalSort(n, edges) {
        const adjList = [];
        for (let i = 0; i < n; i++) {
            adjList[i] = [];
        }
        for (const [s, d] of edges) {
            adjList[d].push(s);
        }

        const res = [];
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
            res.push(i);
            return true;
        };

        for (let i = 0; i < n; i++) {
            if (!dfs(i)) return [];
        }

        return res;
    }
}
