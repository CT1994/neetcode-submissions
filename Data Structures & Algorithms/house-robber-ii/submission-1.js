class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        if (nums.length === 1) {
            return nums[0]
        }

        const dfs = (i, end, cache) => {
            if (i >= end) {
                return 0;
            }

            if (cache[i] > -1) {
                return cache[i]
            }

            return cache[i] = Math.max(
                dfs(i + 1, end, cache),
                nums[i] + dfs(i + 2, end, cache)
            );
        };

        return Math.max(
            dfs(0, nums.length - 1, Array(nums.length - 1).fill(-1)),
            dfs(1, nums.length, Array(nums.length - 1).fill(-1)),
        );
    }
}
