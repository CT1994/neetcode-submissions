class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {
        const adjList = Array.from({ length: numCourses }, () => []);
        for (const [dst, src] of prerequisites) {
            adjList[dst].push(src);
        }

        const topSort = [];
        const path = new Set();
        const visit = new Set();
        const dfs = (src) => {
            if (path.has(src)) return false;
            if (visit.has(src)) return true;
            path.add(src);
            for (const n of adjList[src]) {
                if (!dfs(n)) return false;
            }
            path.delete(src);
            visit.add(src);
            topSort.push(src);
            return true;
        };

        for (let i = 0; i < numCourses; i++) {
            if (!dfs(i)) return [];
        }

        return topSort;
    }
}
