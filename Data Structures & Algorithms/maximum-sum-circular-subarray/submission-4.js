class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubarraySumCircular(nums) {
        let maxGlob = nums[0];
        let minGlob = nums[0];
        let maxCur = 0;
        let minCur = 0;
        let total = 0;

        for (const n of nums) {
            maxCur = Math.max(maxCur, 0) + n;
            minCur = Math.min(minCur, 0) + n;
            total += n;
            maxGlob = Math.max(maxGlob, maxCur);
            minGlob = Math.min(minGlob, minCur);
        }

        return maxGlob > 0 ? Math.max(maxGlob, total - minGlob) : maxGlob;
    }
}
