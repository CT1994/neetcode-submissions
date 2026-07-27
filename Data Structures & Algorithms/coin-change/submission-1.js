class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {
        if (amount === 0) return 0;
        const dp = Array.from({ length: coins.length }, () => new Array(amount + 1).fill(-1));

        const dfs = (i, sum) => {
            if (sum === amount) return 0;
            if (i === coins.length || sum > amount) return Infinity;
            if (dp[i][sum] !== -1) return dp[i][sum];

            let skip = dfs(i + 1, sum);
            let include = 1 + dfs(i, sum + coins[i]);

            return (dp[i][sum] = Math.min(skip, include));
        };

        const res = dfs(0, 0);
        return res === Infinity ? -1 : res;
    }
}
