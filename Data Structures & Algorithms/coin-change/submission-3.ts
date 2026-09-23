class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins: number[], amount: number): number {
        const dp = Array.from({ length: coins.length }, () => Array(amount + 1).fill(-1));
        const dfs = (i: number, sum: number): number => {
            if (i === coins.length || sum > amount) return Infinity;
            if (sum === amount) return 0;
            if (dp[i][sum] !== -1) return dp[i][sum];
            return (dp[i][sum] = Math.min(dfs(i + 1, sum), 1 + dfs(i, sum + coins[i])));
        };
        const res = dfs(0, 0);
        return res === Infinity ? -1 : res;
    }
}
