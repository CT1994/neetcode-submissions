class Solution {
    /**
     * @param {number} amount
     * @param {number[]} coins
     * @return {number}
     */
    change(amount, coins) {
        const dp = Array.from({ length: coins.length }, () => new Array(amount).fill(-1));
        const dfs = (i, sum) => {
            if (sum === amount) return 1;
            if (i === coins.length || sum > amount) return 0;
            if (dp[i][sum] !== -1) return dp[i][sum];
            return (dp[i][sum] = dfs(i + 1, sum) + dfs(i, sum + coins[i]));
        };
        return dfs(0, 0);
    }
}
