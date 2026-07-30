class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @param {number[][]} queries
     * @return {boolean[]}
     */
    checkIfPrerequisite(numCourses, prerequisites, queries) {
        const adjList = new Array(numCourses);
        const prereqMap = new Map();
        for (let i = 0; i < numCourses; i++) {
            adjList[i] = new Set();
        }

        for (const [pre, csr] of prerequisites) {
            adjList[csr].add(pre);
        }

        const dfs = (i) => {
            if (prereqMap.has(i)) return prereqMap.get(i);
            const prereqs = new Set();
            for (const n of adjList[i]) {
                for (const p of dfs(n)) prereqs.add(p);
            }
            prereqs.add(i);
            prereqMap.set(i, prereqs);
            return prereqs;
        };

        for (let i = 0; i < numCourses; i++) {
            dfs(i);
        }

        return queries.map(([u, v]) => prereqMap.get(v).has(u));
    }
}
