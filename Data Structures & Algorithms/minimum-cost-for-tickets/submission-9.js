class Solution {
    /**
     * @param {number[]} days
     * @param {number[]} costs
     * @return {number}
     */
    mincostTickets(days, costs) {
        const dp = new Array(days.length).fill(-1);
        const dfs = (i) => {
            if (i === days.length) return 0;
            if (dp[i] !== -1) return dp[i];

            let j = i;
            const res = [1, 7, 30].map((d, k) => {
                while (j < days.length && days[j] < days[i] + d) j++;
                return costs[k] + dfs(j);
            });
            return (dp[i] = Math.min(...res));
        };
        return dfs(0);
    }
}
