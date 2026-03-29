class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const result = [];
        const prefix = [];
        const postfix = [];
        
        prefix[0] = nums[0];
        postfix[nums.length - 1] = nums[nums.length - 1]

        for (let i = 1; i < nums.length; i++) {
            prefix[i] = prefix[i - 1] * nums[i]
        }

        for (let i = nums.length - 2; i >= 0; i--) {
            postfix[i] = postfix[i + 1] * nums[i]
        }

        for (let i = 0; i < nums.length; i++) {
            result[i] = (prefix[i - 1] ?? 1) * (postfix[i + 1] ?? 1)
        }

        return result;
    }
}
