class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        const cache = {};
        const dfs = (n) => {
            if (!nums[n]) {
                return 0;
            }

            if (cache[n]) {
                return cache[n]
            }

            cache[n] = Math.max(nums[n] + dfs(n + 2), dfs(n + 1))
            
            return cache[n]
        }
        
        return dfs(0)
    }
}
