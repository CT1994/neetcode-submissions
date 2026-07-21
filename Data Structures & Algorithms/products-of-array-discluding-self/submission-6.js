class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const n = nums.length;
        const res = new Array(n);
        const pref = new Array(n);
        const suff = new Array(n);
        pref[0] = 1;
        suff[n - 1] = 1;
        for (let i = 1; i < n; i++) {
            pref[i] = pref[i - 1] * nums[i - 1];
        }
        for (let i = n - 2; i >= 0; i--) {
            suff[i] = suff[i + 1] * nums[i + 1];
        }
        for (let i = 0; i < n; i++) {
            res[i] = pref[i] * suff[i];
        }
        return res;
    }
}
