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

            const one = costs[0] + dfs(i + 1);
            let j = i;
            while (j < days.length && days[j] < days[i] + 7) {
                j++;
            }
            const seven = costs[1] + dfs(j);
            let k = i;
            while (k < days.length && days[k] < days[i] + 30) {
                k++;
            }
            const thirty = costs[2] + dfs(k);
            return (dp[i] = Math.min(one, seven, thirty));
        };
        return dfs(0);
    }
}
