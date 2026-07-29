class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubarraySumCircular(nums) {
        let globMax = nums[0];
        let globMin = nums[0];
        let curMax = 0;
        let curMin = 0;
        let total = 0;

        for (const n of nums) {
            curMax = Math.max(curMax, 0) + n;
            curMin = Math.min(curMin, 0) + n;
            total += n;
            globMax = Math.max(globMax, curMax);
            globMin = Math.min(globMin, curMin);
        }

        return globMax > 0 ? Math.max(globMax, total - globMin) : globMax;
    }
}
