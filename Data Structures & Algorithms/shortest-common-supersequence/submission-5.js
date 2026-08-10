class Solution {
    /**
     * @param {string} str1
     * @param {string} str2
     * @return {string}
     */
    shortestCommonSupersequence(str1, str2) {
        const dp = Array.from({ length: str1.length + 1 }, () =>
            new Array(str2.length + 1).fill(-1),
        );
        const dfs = (i, j) => {
            if (i === str1.length) return str2.slice(j);
            if (j === str2.length) return str1.slice(i);
            if (dp[i][j] !== -1) return dp[i][j]

            let res = "";
            if (str1[i] === str2[j]) {
                res = str1[i] + dfs(i + 1, j + 1);
            } else {
                let newStr1 = res + str1[i] + dfs(i + 1, j);
                let newStr2 = res + str2[j] + dfs(i, j + 1);
                res = newStr1.length < newStr2.length ? newStr1 : newStr2;
            }

            return dp[i][j] = res;
        };
        return dfs(0, 0);
    }
}
