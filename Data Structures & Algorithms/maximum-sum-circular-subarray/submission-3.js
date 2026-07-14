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
            curMin = Math.min(curMin + n, n);
            total += n;
            globMax = Math.max(curMax, globMax);
            globMin = Math.min(curMin, globMin);
        }

        return globMax > 0 ? Math.max(globMax, total - globMin) : globMax;
    }
}
