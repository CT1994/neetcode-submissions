class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {
        const adjList = Array.from({ length: numCourses }, () => []);
        for (const [pre, csr] of prerequisites) {
            adjList[pre].push(csr);
        }

        const topSort = [];
        const visit = new Set();
        const path = new Set();
        const dfs = (csr) => {
            if (path.has(csr)) return false;
            if (visit.has(csr)) return true;
            path.add(csr);
            for (const n of adjList[csr]) {
                if (!dfs(n)) return false;
            }
            path.delete(csr);
            visit.add(csr);
            topSort.push(csr);
            return true;
        };

        for (let i = 0; i < numCourses; i++) {
            if (!dfs(i)) return [];
        }

        return topSort;
    }
}
