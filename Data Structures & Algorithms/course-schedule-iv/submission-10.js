class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @param {number[][]} queries
     * @return {boolean[]}
     */
    checkIfPrerequisite(numCourses, prerequisites, queries) {
        const adjList = [];
        for (let i = 0; i < numCourses; i++) {
            adjList[i] = [];
        }
        for (const [src, dst] of prerequisites) {
            adjList[dst].push(src);
        }

        const prereqMap = new Map();
        const dfs = (i) => {
            if (prereqMap.has(i)) return prereqMap.get(i);
            const prereqSet = new Set();
            for (const n of adjList[i]) {
                for (const p of dfs(n)) prereqSet.add(p);
            }
            prereqSet.add(i);
            prereqMap.set(i, prereqSet);
            return prereqSet;
        };

        for (let i = 0; i < numCourses; i++) {
            dfs(i);
        }

        return queries.map(([u, v]) => prereqMap.get(v).has(u));
    }
}
