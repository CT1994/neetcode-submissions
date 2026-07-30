class Solution {
    /**
     * @param {number} amount
     * @param {number[]} coins
     * @return {number}
     */
    change(amount, coins) {
        const dp = Array.from({ length: coins.length }, () => new Array(amount + 1).fill(-1));
        const dfs = (i, sum) => {
            if (sum === amount) return 1;
            if (sum > amount || i === coins.length) return 0;
            if (dp[i][sum] !== -1) return dp[i][sum];
            return (dp[i][sum] = dfs(i + 1, sum) + dfs(i, sum + coins[i]));
        };
        return dfs(0, 0);
    }
}
