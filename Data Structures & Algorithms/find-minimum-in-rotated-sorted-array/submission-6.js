class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let res = Infinity;
        let l = 0;
        let r = nums.length - 1;
        while (l <= r) {
            const m = l + Math.floor((r - l) / 2);
            res = Math.min(res, nums[m]);

            if (nums[r] < nums[m]) {
                l = m + 1;
            } else {
                r = m - 1;
            }
        }

        return res;
    }
}
