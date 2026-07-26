class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        let res = 0;
        let leftSum = 0;
        const prefixMap = {};
        prefixMap[0] = 1;
        for (const n of nums) {
            leftSum += n;
            const diff = leftSum - k;
            res += prefixMap[diff] || 0;
            prefixMap[leftSum] = (prefixMap[leftSum] || 0) + 1;
        }
        return res;
    }
}
