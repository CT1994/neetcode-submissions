class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const n = nums.length;
        const res = new Array(n).fill(1);
        const pref = new Array(n).fill(1);
        const suff = new Array(n).fill(1);

        for (let i = 1; i < n; i++) {
            pref[i] = pref[i - 1] * nums[i - 1];
        }

        for (let i = nums.length - 2; i >= 0; i--) {
            suff[i] = suff[i + 1] * nums[i + 1];
        }

        for (let i = 0; i < nums.length; i++) {
            res[i] = pref[i] * suff[i];
        }

        return res;
    }
}
