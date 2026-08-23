class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    firstMissingPositive(nums) {
        let i = 0;
        while (i < nums.length) {
            if (nums[i] <= 0 || nums[i] > nums.length) {
                i++;
                continue;
            }

            const idx = nums[i] - 1;
            if (nums[i] !== nums[idx]) {
                [nums[i], nums[idx]] = [nums[idx], nums[i]];
            } else {
                i++;
            }
        }

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] !== i + 1) {
                return i + 1;
            }
        }
        return nums.length + 1;
    }
}
