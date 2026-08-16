class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @param {number[][]} queries
     * @return {boolean[]}
     */
    checkIfPrerequisite(numCourses, prerequisites, queries) {
        const adjList = Array.from({ length: numCourses }, () => []);
        for (const [pre, csr] of prerequisites) {
            adjList[csr].push(pre);
        }

        const prereqMap = new Map();
        const dfs = (csr) => {
            if (prereqMap.has(csr)) return prereqMap.get(csr);
            const prereqSet = new Set();
            for (const n of adjList[csr]) {
                for (const pre of dfs(n)) prereqSet.add(pre);
            }
            prereqSet.add(csr);
            prereqMap.set(csr, prereqSet);
            return prereqSet;
        };

        for (let i = 0; i < numCourses; i++) {
            dfs(i);
        }
        console.log(prereqMap);
        return queries.map(([u, v]) => prereqMap.get(v).has(u));
    }
}
