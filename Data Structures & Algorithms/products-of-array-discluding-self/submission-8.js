class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const pref = new Array(nums.length).fill(1);
        const suff = new Array(nums.length).fill(1);

        for (let i = 1; i < nums.length; i++) {
            pref[i] = pref[i - 1] * nums[i - 1];
        }

        for (let i = nums.length - 2; i >= 0; i--) {
            suff[i] = suff[i + 1] * nums[i + 1];
        }

        const res = new Array(nums.length).fill(1);
        for (let i = 0; i < nums.length; i++) {
            res[i] = pref[i] * suff[i];
        }
        return res;
    }
}
