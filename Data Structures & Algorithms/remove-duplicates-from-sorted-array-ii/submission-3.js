class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        let k = 0;
        let l = 0;
        while (l < nums.length) {
            let count = 1;
            while (l < nums.length && nums[l] === nums[l + 1]) {
                count++;
                l++;
            }

            for (let i = 0; i < Math.min(2, count); i++) {
                nums[k] = nums[l];
                k++;
            }
            l++;
        }

        return k;
    }
}
