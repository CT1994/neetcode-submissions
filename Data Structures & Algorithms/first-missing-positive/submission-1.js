class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    firstMissingPositive(nums) {
        let n = nums.length;
        let i = 0;
        while (i < n) {
            if (nums[i] <= 0 || nums[i] > n) {
                i++;
                continue;
            }
            let index = nums[i] - 1;
            if (nums[i] !== nums[index]) {
                [nums[i], nums[index]] = [nums[index], nums[i]];
            }
            else {
                i++
            }
        }

        for (let i = 0; i < n; i++) {
            if (nums[i] != i + 1) {
                return i + 1
            }
        }

        return n + 1
    }
}
