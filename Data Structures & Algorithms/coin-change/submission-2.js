class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {
        const dp = Array.from({ length: coins.length }, () => new Array(amount + 1).fill(-1));
        const dfs = (i, sum) => {
            if (sum > amount || i === coins.length) return Infinity;
            if (sum === amount) return 0;
            if (dp[i][sum] !== -1) return dp[i][sum];

            const skip = dfs(i + 1, sum);
            const include = 1 + dfs(i, coins[i] + sum);
            return (dp[i][sum] = Math.min(skip, include));
        };

        const res = dfs(0, 0);
        return res === Infinity ? -1 : res;
    }
}
