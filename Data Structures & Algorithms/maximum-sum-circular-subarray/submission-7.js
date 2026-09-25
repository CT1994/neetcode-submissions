class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubarraySumCircular(nums) {
        let max = 0;
        let min = 0;
        let globalMax = nums[0];
        let globalMin = nums[0];
        let total = 0;

        for (const n of nums) {
            max = Math.max(max, 0) + n;
            min = Math.min(min, 0) + n;
            total += n;
            globalMax = Math.max(globalMax, max);
            globalMin = Math.min(globalMin, min);
        }

        return globalMax > 0 ? Math.max(globalMax, total - globalMin) : globalMax;
    }
}
