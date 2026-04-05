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
            const m = Math.floor((l + r) / 2)
            console.log(m)

            if (target > nums[m]) {
                l = m + 1;
            }
            else if (target < nums[m]) {
                r = m - 1;
            }
            else {
                return m
            }
        }
        return -1;
    }
}
