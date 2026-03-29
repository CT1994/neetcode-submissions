class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const result = [];
        const prefix = [];
        const postfix = [];

        for (let i = 0; i < nums.length; i++) {
            prefix[i] = (prefix[i - 1] ?? 1) * nums[i];
        }

        for (let i = nums.length - 1; i >= 0; i--) {
            postfix[i] = (postfix[i + 1] ?? 1) * nums[i]
        }

        console.log(nums)
        console.log(prefix)
        console.log(postfix)

        for (let i = 0; i < nums.length; i++) {
            const value1 = (prefix[i - 1] ?? 1)
            const value2 = (postfix[i + 1] ?? 1)
            console.log(value1, value2)
            result[i] = value1 * value2
        }

        return result
    }
}
