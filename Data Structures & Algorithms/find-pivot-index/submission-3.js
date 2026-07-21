class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    pivotIndex(nums) {
        const n = nums.length;
        const pref = new Array(n).fill(0);
        const suff = new Array(n).fill(0);
        for (let i = 0; i < n; i++) {
            pref[i] = (pref[i - 1] || 0) + nums[i];
            suff[n - i - 1] = (suff[n - i] ||0) + nums[n - i - 1]
        }

        for (let i = 0; i < n; i++) {
            if (pref[i] === suff[i]) return i;
        }

        return -1;
    }
}
