class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1, m, nums2, n) {
        let i = nums1.length;

        for (let i = nums1.length - 1; i >= 0; i--) {
            let num1 = nums1[m - 1] ?? -Infinity
            let num2 = nums2[n - 1] ?? -Infinity
            if (num1 >= num2) {
                nums1[i] = num1;
                m--;
            } else {
                nums1[i] = num2;
                n--;
            }
        }
    }
}
