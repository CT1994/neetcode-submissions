class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        const array = [...nums1, ...nums2];
        array.sort((a, b) => a - b);

        if (array.length % 2) {
            return array[Math.floor(array.length / 2)];
        }

        const m = array.length / 2;
        return (array[m - 1] + array[m]) / 2;
    }
}
