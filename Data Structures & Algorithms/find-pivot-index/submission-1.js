class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    pivotIndex(nums) {
        const prefix = new Int32Array(nums.length);
        const postfix = new Int32Array(nums.length);
        for (let i = 0; i < nums.length; i++) {
            prefix[i] = (prefix[i - 1] || 0) + nums[i];
            postfix[nums.length - 1 - i] = (postfix[nums.length - i] || 0) + nums[nums.length - 1 - i];
        }

        for (let i = 0; i < nums.length; i++) {
            if (prefix[i] === postfix[i]) {
                return i;
            }
        }

        return -1;
    }
}
