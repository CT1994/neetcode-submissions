class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        const adjList = Array.from({ length: numCourses }, () => []);
        for (const [dst, src] of prerequisites) {
            adjList[src].push(dst);
        }

        const topSort = [];
        const path = new Set();
        const visited = new Set();
        const dfs = (i) => {
            if (path.has(i)) return false;
            if (visited.has(i)) return true;
            path.add(i);
            for (const n of adjList[i]) {
                if (!dfs(n)) return false;
            }
            path.delete(i);
            topSort.push(i);
            visited.add(i);
            return true;
        };

        for (let i = 0; i < numCourses; i++) {
            if (!dfs(i)) return false;
        }

        return true;
    }
}
