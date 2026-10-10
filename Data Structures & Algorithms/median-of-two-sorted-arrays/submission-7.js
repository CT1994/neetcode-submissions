class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        const total = nums1.length + nums2.length;
        const half = Math.floor(total / 2) + 1;
        let i = 0;
        let j = 0;
        let prev = 0;
        let curr = 0;

        for (let k = 0; k < half; k++) {
            prev = curr;
            const num1 = nums1[i] ?? Infinity;
            const num2 = nums2[j] ?? Infinity;

            if (num1 <= num2) {
                curr = num1;
                i++;
            } else {
                curr = num2;
                j++;
            }
        }

        if (total % 2 !== 0) {
            return curr;
        }

        return (prev + curr) / 2;
    }
}
