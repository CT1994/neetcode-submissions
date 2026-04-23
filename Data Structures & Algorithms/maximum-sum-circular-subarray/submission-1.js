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
            curMax = Math.max(curMax + n, n);
            globMax = Math.max(globMax, curMax);
            curMin = Math.min(curMin + n, n);
            globMin = Math.min(globMin, curMin);
            total += n
        }

        return globMax > 0 ? Math.max(globMax, total - globMin) : globMax;
    }
}
