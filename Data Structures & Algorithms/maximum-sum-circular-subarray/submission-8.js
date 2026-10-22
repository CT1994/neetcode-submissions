class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubarraySumCircular(nums) {
        let curMax = 0;
        let curMin = 0;
        let total = 0;
        let globalMax = nums[0];
        let globalMin = nums[0];

        for (const n of nums) {
            curMax = Math.max(curMax, 0) + n;
            curMin = Math.min(curMin, 0) + n;
            total += n;
            globalMax = Math.max(globalMax, curMax);
            globalMin = Math.min(globalMin, curMin);
        }

        return globalMax > 0 ? Math.max(globalMax, total - globalMin) : globalMax;
    }
}