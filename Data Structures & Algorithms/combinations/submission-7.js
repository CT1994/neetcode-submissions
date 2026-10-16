class Solution {
    /**
     * @param {number} n
     * @param {number} k
     * @return {number[][]}
     */
    combine(n, k) {
        const res = [];
        const curSum = [];
        const dfs = (i) => {
            if (curSum.length === k) {
                res.push([...curSum]);
                return;
            }
            if (i === n + 1) return;

            curSum.push(i);
            dfs(i + 1);
            curSum.pop();
            dfs(i + 1);
        };
        dfs(1);
        return res;
    }
}
