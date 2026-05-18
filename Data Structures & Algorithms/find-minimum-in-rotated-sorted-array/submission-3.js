class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let l = 0;
        let r = nums.length - 1;

        while (l < r) {
            if (nums[l] < nums[r] && nums[l] < nums[l + 1]) {
                return nums[l]
            }
            else if (nums[r] < nums[l] && nums[r] < nums[r - 1]) {
                return nums[r]
            }
            else {
                r--
                l++
            }
        }

        return nums[l]
    }
}
