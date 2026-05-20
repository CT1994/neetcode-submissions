class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        nums.sort();
        return nums[Math.floor(nums.length / 2)]
    }
}
