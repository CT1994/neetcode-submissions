class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        let res = 0;
        let curSum = 0;
        const prefixSum = {};
        prefixSum[0] = 1;
        for (let n of nums) {
            curSum += n;
            const diff = curSum - k;
            res += prefixSum[diff] || 0;
            prefixSum[curSum] = (prefixSum[curSum] || 0) + 1;
        }
        return res;
    }
}
