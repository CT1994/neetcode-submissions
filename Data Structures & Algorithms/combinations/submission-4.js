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

            if (i > n) return;

            subset.push(i);
            dfs(i + 1);
            subset.pop();
            dfs(i + 1);
        };
        dfs(1);
        return res;
    }
}
