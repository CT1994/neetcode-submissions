class Solution {
    /**
     * @param {number[]} days
     * @param {number[]} costs
     * @return {number}
     */
    mincostTickets(days, costs) {
        const dp = new Array(days.length + 1).fill(-1);
        const dfs = (i) => {
            if (i >= days.length) return 0;
            if (dp[i] !== -1) return dp[i];

            const oneDay = costs[0] + dfs(i + 1);
            let j = i;
            while (j < days.length && days[j] < days[i] + 7) j++;
            const sevenDay = costs[1] + dfs(j);
            let k = i;
            while (k < days.length && days[k] < days[i] + 30) k++;
            const thirtyDay = costs[2] + dfs(k);

            return (dp[i] = Math.min(oneDay, sevenDay, thirtyDay));
        };

        return dfs(0);
    }
}
