class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let res = 0;
        let count = 0;

        for (const n of nums) {
            count = n === 1 ? count + 1 : 0;
            res = Math.max(res, count);
        }

        return res;
    }
}
