class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        let l = 0;
        let r = 0;
        while (r < nums.length) {
            while (r < nums.length && nums[r] === nums[r + 1]) {
                r++;
            }
            nums[l] = nums[r];
            l++;
            r++;
        }
        return l;
    }
}
