class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let maxSum = -Infinity;
        let curSum = 0;

        for (const n of nums) {
            curSum = Math.max(curSum, 0) + n;
            maxSum = Math.max(maxSum, curSum);
        }

        return maxSum;
    }
}
