class Solution {
    /**
     * @param {number} n
     * @param {number} k
     * @return {number[][]}
     */
    combine(n, k) {
        const res = [];
        const subset = [];
        const dfs = (i) => {
            if (subset.length === k) {
                res.push([...subset]);
                return;
            }

            for (let j = i; j <= n; j++) {
                subset.push(j);
                dfs(j + 1);
                subset.pop();
            }
        };
        dfs(1);
        return res;
    }
}
