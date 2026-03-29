class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const result = new Array(nums.length).fill(1);

        for (let i = 0; i < nums.length; i++) {
            for (let j = 0; j < nums.length; j++) {
                if (i !== j) {
                    result[i] = result[i] * nums[j]
                }
            }
        }

        return result;
    }
}
