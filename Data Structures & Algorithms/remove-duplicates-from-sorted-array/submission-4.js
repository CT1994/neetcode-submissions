class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        let l = 0;
        let r = 0;
        while (r < nums.length) {
            nums[l] = nums[r];
            while (r < nums.length && nums[l] === nums[r]) {
                r++;
            }
            l++;
        }
        return l;
    }
}
