class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        candidates.sort();
        const res = [];

        const dfs = (i, cur, sum) => {
            if (sum === target) {
                res.push([...cur]);
                return;
            }

            if (i === candidates.length || sum > target) {
                return;
            }

            dfs(i + 1, [...cur, candidates[i]], sum + candidates[i]);
            for (let j = i + 1; j < candidates.length; j++) {
                if (candidates[j - 1] !== candidates[j]) {
                    cur.push(candidates[j]);
                    dfs(j + 1, cur, sum + candidates[j]);
                    cur.pop();
                }
            }
        };

        dfs(0, [], 0);

        return res;
    }
}
