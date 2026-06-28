class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    firstMissingPositive(nums) {
        const n = nums.length;
        let i = 0;

        while (i < n) {
            const index = nums[i] - 1;
            if (nums[i] > 0 && nums[i] <= n && nums[i] !== nums[index]) {
                [nums[i], nums[index]] = [nums[index], nums[i]];
            } else {
                i++;
            }
        }

        for (let i = 0; i < n; i++) {
            if (nums[i] !== i + 1) {
                return i + 1;
            }
        }

        return n + 1;
    }
}
