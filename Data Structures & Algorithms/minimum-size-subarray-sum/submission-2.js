class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target, nums) {
        let res = nums.length + 1;
        let sum = 0;
        let L = 0;
        for (let R = 0; R < nums.length; R++) {
            sum += nums[R];

            while (sum >= target) {
                sum -= nums[L];
                res = Math.min(res, R - L + 1);
                L++;
            }
        }

        return res === nums.length + 1 ? 0 : res;
    }
}
