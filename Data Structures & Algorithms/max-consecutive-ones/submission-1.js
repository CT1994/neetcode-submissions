class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let res = 0;
        let count = 0;
        for (let i = 0; i < nums.length; i++) {
            count = nums[i] === 1 ? count + 1 : 0
            res = Math.max(res, count);
        }

        return res;
    }
}
