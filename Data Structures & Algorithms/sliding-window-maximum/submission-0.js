class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        const res = [];

        let l = 0;
        let r = k;

        while (r <= nums.length) {
            let max = -10000;
            for (let i = l; i < r; i++) {
                max = Math.max(max, nums[i]);
            }
            res.push(max);
            l++;
            r++;
        }

        return res;
    }
}
