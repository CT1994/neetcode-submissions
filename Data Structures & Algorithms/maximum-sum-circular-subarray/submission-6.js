class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubarraySumCircular(nums) {
        let maxSum = nums[0];
        let minSum = nums[0];
        let total = 0;
        let maxCur = 0;
        let minCur = 0;
        for (const num of nums) {
            maxCur = Math.max(maxCur, 0) + num;
            minCur = Math.min(minCur, 0) + num;
            total += num;
            maxSum = Math.max(maxSum, maxCur);
            minSum = Math.min(minSum, minCur);
        }
        return maxSum > 0 ? Math.max(maxSum, total - minSum) : maxSum;
    }
}
