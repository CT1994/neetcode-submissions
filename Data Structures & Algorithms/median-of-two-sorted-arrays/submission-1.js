class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        // looking to do a merge sort on nums1 and nums2
        // this would give me nums3 which i can then easily find the medium
        const nums3 = [];

        let i = 0;
        let j = 0;

        // merge the two arrays
        while (i < nums1.length && j < nums2.length) {
            if (nums1[i] < nums2[j]) {
                nums3.push(nums1[i]);
                i++;
            } else {
                nums3.push(nums2[j]);
                j++;
            }
        }

        // push the remaining nums from nums1
        while (i < nums1.length) {
            nums3.push(nums1[i]);
            i++;
        }

        // pysh the remaining nums from nums2
        while (j < nums2.length) {
            nums3.push(nums2[j]);
            j++;
        }

        const mid = (nums3.length - 1) / 2;
        console.log(mid)
        if (nums3[mid] !== undefined) {
            return nums3[mid];
        }

        return (nums3[mid - 0.5] + nums3[mid + 0.5]) / 2;
    }
}
