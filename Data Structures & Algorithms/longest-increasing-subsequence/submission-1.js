class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums) {
        const n = nums.length;
        const memo = Array.from({ length: n + 1 }, () => new Array(n + 1).fill(-1));
        const dfs = (prevIdx, curIdx) => {
            if (curIdx === n) {
                return 0;
            }

            if (memo[prevIdx + 1][curIdx] !== -1) {
                return memo[prevIdx + 1][curIdx];
            }

            const skip = dfs(prevIdx, curIdx + 1);
            let include = 0;
            if (prevIdx === -1 || nums[prevIdx] < nums[curIdx]) {
                include = 1 + dfs(curIdx, curIdx + 1);
            }

            memo[prevIdx + 1][curIdx] = Math.max(skip, include);
            return memo[prevIdx + 1][curIdx];
        };

        return dfs(-1, 0);
    }
}
