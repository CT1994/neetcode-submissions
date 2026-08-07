class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @param {number[][]} queries
     * @return {boolean[]}
     */
    checkIfPrerequisite(numCourses, prerequisites, queries) {
        const adjList = Array.from({length: numCourses}, () => new Set());
        const prereqMap = new Map();
        for (const [pre, csr] of prerequisites) {
            adjList[csr].add(pre);
        }

        const dfs = (src) => {
            if (prereqMap.has(src)) return prereqMap.get(src);
            const prereqSet = new Set();
            for (const n of adjList[src]) {
                for (const p of dfs(n)) prereqSet.add(p)
            }
            prereqSet.add(src);
            prereqMap.set(src, prereqSet)
            return prereqSet;
        }

        for (let i = 0; i < numCourses; i++) {
            dfs(i)
        }

        return queries.map(([u, v]) => prereqMap.get(v).has(u))
    }
}
