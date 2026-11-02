class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l = 0;
        let r = nums.length - 1;
        while (l <= r) {
            const m = Math.floor((l + r) / 2);
            if (nums[m] === target) return m;

            if (nums[l] <= nums[m]) {
                if (target < nums[l] || nums[m] < target) {
                    l = m + 1;
                } else {
                    r = m - 1;
                }
            } else {
                if (target > nums[r] || nums[m] > target) {
                    r = m - 1;
                } else {
                    l = m + 1;
                }
            }
        }

        return -1;
    }
}
