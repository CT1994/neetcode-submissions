class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        let l = 0;
        let r = 1;

        while (r < nums.length) {
            if (nums[l] === nums[r]) {
                nums.splice(l, 1);
            } else {
                r++;
                l++;
            }
        }

        return nums.length;
    }
}
