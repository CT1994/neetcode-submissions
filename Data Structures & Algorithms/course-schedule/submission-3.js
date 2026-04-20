class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        const preMap = {};
        for (let i = 0; i < numCourses; i++) {
            preMap[i] = [];
        }
        
        for (let [crs, pre] of prerequisites) {
            preMap[crs].push(pre);
        }

        const visit = new Set();

        const dfs = (crs) => {
            if (visit.has(crs)) {
                return false;
            }

            if (preMap[crs].length === 0) {
                return true
            }

            visit.add(crs)
            for (const pre of preMap[crs]) {
                console.log(pre)
                if (!dfs(pre)) {
                    return false
                }
            }

            visit.delete(crs);
            preMap[crs] = [];

            return true
        }

        for (let i = 0; i < numCourses; i++) {
            if (!dfs(i)) {
                return false
            }
        }

        return true;
    }
}
