class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let maxCur = nums[0];
        let cur = 0;
        for (const n of nums) {
            cur = Math.max(cur, 0) + n;
            maxCur = Math.max(maxCur, cur);
        }
        return maxCur;
    }
}
