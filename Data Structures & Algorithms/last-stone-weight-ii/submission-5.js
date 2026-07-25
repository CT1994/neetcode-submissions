class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeightII(stones) {
        const stoneSum = stones.reduce((a, b) => a + b, 0);
        const target = Math.ceil(stoneSum / 2);
        const dp = {};
        const dfs = (i, total) => {
            if (total >= target || i === stones.length) {
                return Math.abs(total - (stoneSum - total));
            }
            const key = `${i}-${total}`;
            if (key in dp) return dp[key];
            return (dp[key] = Math.min(dfs(i + 1, total), dfs(i + 1, total + stones[i])));
        };

        return dfs(0, 0);
    }
}
