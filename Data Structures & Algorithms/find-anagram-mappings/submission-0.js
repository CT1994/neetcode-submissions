class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[]}
     */
    anagramMappings(nums1, nums2) {
        const res = [];
        const n = nums1.length;
        const map = new Map();

        for (let i = 0; i < n; i++) {
            map.set(nums2[i], i);
        }

        for (let i = 0; i < n; i++) {
            res[i] = map.get(nums1[i]);
        }

        return res;
    }
}
