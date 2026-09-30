class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        let res = 0;
        let leftSum = 0;
        const prefixMap = new Map();
        prefixMap.set(0, 1);
        for (const num of nums) {
            leftSum += num;
            const diff = leftSum - k;
            res += prefixMap.get(diff) || 0;
            prefixMap.set(leftSum, (prefixMap.get(leftSum) || 0) + 1);
        }
        return res;
    }
}
