class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        let L = 0;
        for (let R = 0; R < nums.length; R++) {
            let count = 1;
            while (R < nums.length && nums[R] === nums[R + 1]) {
                R++;
                count++;
            }

            for (let i = 0; i < Math.min(2, count); i++) {
                nums[L] = nums[R];
                L++;
            }
        }
        return L;
    }
}
