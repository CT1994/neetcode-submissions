class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        const total = nums1.length + nums2.length;
        const mid = Math.floor(total / 2);
        const array = [];
        let i = 0;
        let j = 0;
        while (i < nums1.length && j < nums2.length && array.length <= mid) {
            if (nums1[i] <= nums2[j]) {
                array.push(nums1[i]);
                i++;
            } else {
                array.push(nums2[j]);
                j++;
            }
        }

        if (array.length <= mid) {
            while (array.length <= mid && i < nums1.length) {
                array.push(nums1[i]);
                i++;
            }

            while (array.length <= mid && j < nums2.length) {
                array.push(nums2[j]);
                j++;
            }
        }

        if (total % 2) {
            return array[array.length - 1];
        }

        return (array[array.length - 1] + array[array.length - 2]) / 2;
    }
}
