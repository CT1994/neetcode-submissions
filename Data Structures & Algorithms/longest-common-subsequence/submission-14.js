class Solution {
    /**
     * @param {string} text1
     * @param {string} text2
     * @return {number}
     */
    longestCommonSubsequence(text1, text2) {
        const N = text1.length;
        const M = text2.length;
        let dp = new Array(M + 1).fill(0);

        for (let i = 0; i < N; i++) {
            let curRow = new Array(M + 1).fill(0);
            for (let j = 0; j < M; j++) {
                if (text1.charAt(i) == text2.charAt(j)) {
                    curRow[j + 1] = 1 + dp[j];
                } else {
                    curRow[j + 1] = Math.max(dp[j + 1], curRow[j]);
                }
            }
            dp = curRow;
        }
        return dp[M];
    }
}
