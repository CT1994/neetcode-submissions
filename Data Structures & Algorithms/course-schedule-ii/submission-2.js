class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {
        const adjList = [];
        for (let i = 0; i < numCourses; i++) {
            adjList[i] = [];
        }
        for (const [src, dst] of prerequisites) {
            adjList[src].push(dst);
        }

        const res = [];
        const visit = new Set();
        const path = new Set();

        const dfs = (i) => {
            if (visit.has(i)) return true;
            if (path.has(i)) return false;
            path.add(i);
            for (const n of adjList[i]) {
                if (!dfs(n)) return false;
            }
            visit.add(i);
            path.delete(i);
            res.push(i);
            return true;
        };

        for (let i = 0; i < numCourses; i++) {
            if (!dfs(i)) return [];
        }

        return res;
    }
}
