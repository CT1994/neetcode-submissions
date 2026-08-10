class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeightII(stones) {
        const total = stones.reduce((a, b) => a + b, 0);
        const target = Math.floor(total / 2);
        const dp = Array.from({ length: stones.length }, () => new Array(target + 1).fill(-1));
        const dfs = (i, sum) => {
            if (sum >= target || i === stones.length) {
                return Math.abs(sum - (total - sum));
            }
            if (dp[i][sum] !== -1) return dp[i][sum];
            return (dp[i][sum] = Math.min(dfs(i + 1, sum), dfs(i + 1, stones[i] + sum)));
        };
        return dfs(0, 0);
    }
}
