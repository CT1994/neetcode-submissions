class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
        let res = nums[0];
        let curMin = 1;
        let curMax = 1;

        for (const n of nums) {
            if (n === 0) {
                curMin = 1;
                curMax = 1;
            }
            const tmp = curMax * n
            curMax = Math.max(n * curMax, n * curMin, n)
            curMin = Math.min(tmp, n * curMin, n)
            res = Math.max(res, curMax)
        }

        return res
    }
}
