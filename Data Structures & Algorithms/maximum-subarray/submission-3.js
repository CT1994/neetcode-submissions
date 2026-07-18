class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let res = nums[0];
        let sum = 0;
        for (const n of nums) {
            sum = Math.max(sum, 0) + n;
            res = Math.max(res, sum);
        }
        return res;
    }
}
