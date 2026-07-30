class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @param {string} s3
     * @return {boolean}
     */
    isInterleave(s1, s2, s3) {
        const cache = Array.from({ length: s1.length + 1 }, () =>
            new Array(s2.length + 1).fill(-1),
        );
        const dfs = (i, j, k) => {
            if (k === s3.length) {
                return i === s1.length && j === s2.length
            };
            if (cache[i][j] !== -1) return cache[i][j];

            let res = false;
            if (i < s1.length && s1[i] === s3[k]) {
                res = dfs(i + 1, j, k + 1);
            }

            if (!res && j < s2.length && s2[j] === s3[k]) {
                res = dfs(i, j + 1, k + 1);
            }

            return (cache[i][j] = res);
        };

        return dfs(0, 0, 0);
    }
}
