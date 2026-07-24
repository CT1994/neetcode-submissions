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
        for (const [dst, src] of prerequisites) {
            adjList[src].push(dst);
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

        for (let i = 0; i < numCourses; i++) {
            if (!dfs(i)) return [];
        }

        res.reverse();
        return visit.size === numCourses ? res : [];
    }
}
