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

            let total = 0;
            cache[n] = Math.max(nums[n] + dfs(n + 2), nums[n] + dfs(n + 3))
            total += cache[n]
            
            return total
        }
        
        return Math.max(dfs(0), dfs(1))
    }
}
