class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    pivotIndex(nums) {
        const prefix = new Array(nums.length).fill(0);
        const suffix = new Array(nums.length).fill(0);
        for (let i = 0; i < nums.length; i++) {
            prefix[i] = (prefix[i - 1] || 0) + nums[i];
        }

        for (let i = nums.length - 1; i >= 0; i--) {
            suffix[i] = (suffix[i + 1] || 0) + nums[i];
        }

        for (let i = 0; i < nums.length; i++) {
            if (prefix[i] === suffix[i]) return i;
        }

        return -1;
    }
}
