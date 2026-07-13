class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        const adj = [];

        for (let i = 0; i < numCourses; i++) {
            adj[i] = [];
        }

        for (const [dst, src] of prerequisites) {
            adj[src].push(dst);
        }

        const visiting = new Set();
        const dfs = (src) => {
            if (adj[src].length === 0) return true;
            if (visiting.has(src)) return false;

            visiting.add(src);
            for (const dst of adj[src]) {
                if (!dfs(dst)) return false;
            }
            visiting.delete(src);
            adj[src] = [];
            return true;
        };

        for (let i = 0; i < numCourses; i++) {
            if (!dfs(i)) return false;
        }

        return true;
    }
}
