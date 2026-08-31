class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @param {string} s3
     * @return {boolean}
     */
    isInterleave(s1, s2, s3) {
        if (s1.length + s2.length !== s3.length) return false;

        const dp = Array.from({ length: s1.length + 1 }, () => new Array(s2.length + 1).fill(-1));
        const dfs = (i, j) => {
            if (i + j === s3.length) return true;
            if (dp[i][j] !== -1) return dp[i][j];

            let res = false;
            if (s1[i] === s3[i + j]) {
                res = dfs(i + 1, j);
            }

            if (!res && s2[j] === s3[i + j]) {
                res = dfs(i, j + 1);
            }

            return (dp[i][j] = res);
        };
        return dfs(0, 0);
    }
}
