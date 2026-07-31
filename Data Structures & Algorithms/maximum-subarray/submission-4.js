class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let maxSum = nums[0];
        let curSum = 0;
        for (const n of nums) {
            curSum = Math.max(curSum, 0) + n;
            maxSum = Math.max(maxSum, curSum);
        }
        return maxSum;
    }
}
