class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        const adjList = [];
        for (let i = 0; i < numCourses; i++) {
            adjList[i] = []
        }
        for (const [dst, src] of prerequisites) {
            adjList[src].push(dst);
        }

        const visiting = new Set();
        const dfs = (src) => {
            if (visiting.has(src)) return false;
            if (adjList[src].length === 0) return true;
            visiting.add(src);
            for (const dst of adjList[src]) {
                if (!dfs(dst)) return false;
            }
            visiting.delete(src);
            adjList[src] = [];
            return true;
        };

        for (let i = 0; i < numCourses; i++) {
            if (!dfs(i)) return false;
        }

        return true;
    }
}
