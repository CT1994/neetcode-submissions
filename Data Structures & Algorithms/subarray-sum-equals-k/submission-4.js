class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        let res = 0;
        let sum = 0;
        const prefixSums = new Map();
        prefixSums.set(0, 1)

        for (const n of nums) {
            sum += n;
            const diff = sum - k;
            res += prefixSums.get(diff) || 0;
            prefixSums.set(sum, (prefixSums.get(sum) || 0) + 1)
        }

        return res
    }
}
