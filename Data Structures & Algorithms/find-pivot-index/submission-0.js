class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    pivotIndex(nums) {
        let total = 0;
        let leftSum = 0;

        for (let i = 0; i < nums.length; i++) {
            total += nums[i]
        }

        for (let i = 0; i < nums.length; i++) {
            if (leftSum === total - nums[i] - leftSum) {
                return i
            }

            leftSum += nums[i];
        }

        return -1
    }
}
