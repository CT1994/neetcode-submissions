class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const prefix = new Array(nums.length + 1).fill(1);
        const suffix = new Array(nums.length + 1).fill(1);
        
        for (let i = 0; i < nums.length; i++) {
            prefix[i + 1] = nums[i] * prefix[i]
        }

        for (let i = nums.length - 1; i >= 0; i--) {
            suffix[i] = suffix[i + 1] * nums[i]
        }

        const res = new Array(nums.length).fill(0);
        
        for (let i = nums.length - 1; i >= 0; i--) {
            res[i] = prefix[i] * suffix[i + 1];
        }

        return res
    }
}
