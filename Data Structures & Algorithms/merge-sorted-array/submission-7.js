class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1, m, nums2, n) {
        m--;
        n--;
        let k = nums1.length - 1;
        while (n >= 0 && m >= 0) {
            if (nums1[m] > nums2[n]) {
                nums1[k] = nums1[m];
                m--;
            } else {
                nums1[k] = nums2[n];
                n--;
            }
            k--;
        }

        while (m >= 0) {
            nums1[k] = nums1[m];
            m--;
            k--;
        }

        while (n >= 0) {
            nums1[k] = nums2[n];
            n--;
            k--;
        }
    }
}
