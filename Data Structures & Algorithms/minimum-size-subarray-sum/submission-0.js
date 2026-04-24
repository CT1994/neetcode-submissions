class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target, nums) {
        let total = 0;
        let L = 0;
        let res = Infinity;

        for (let R = 0; R < nums.length; R++) {
            total += nums[R];
            while (total >= target) {
                res = Math.min(res, R - L + 1);
                total -= nums[L]
                L++
            }
        }

        return res === Infinity ? 0 : res;
    }
}
