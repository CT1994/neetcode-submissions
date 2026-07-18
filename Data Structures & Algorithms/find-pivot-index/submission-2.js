class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    pivotIndex(nums) {
        let total = 0;
        for (const n of nums) {
            total += n;
        }
        let leftSum = 0;
        for (let i = 0; i < nums.length; i++) {
            const rightSum = total - nums[i] - leftSum;
            if (leftSum === rightSum) return i;
            leftSum += nums[i];
        }
        return -1;
    }
}
