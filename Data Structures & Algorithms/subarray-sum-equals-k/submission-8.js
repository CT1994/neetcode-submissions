class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        let res = 0;
        let sum = 0;
        const prefixMap = new Map();
        prefixMap.set(0, 1);
        for (const n of nums) {
            sum += n;
            const diff = sum - k;
            res += prefixMap.get(diff) || 0;
            prefixMap.set(sum, (prefixMap.get(sum) || 0) + 1);
        }
        return res;
    }
}
