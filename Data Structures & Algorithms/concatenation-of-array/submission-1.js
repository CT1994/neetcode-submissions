class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        const n = nums.length;
        const res = new Array(n * 2);

        for (let i = 0; i < nums.length; i++) {
            res[i] = nums[i];
            res[i + n] = nums[i]
        }

        return res;
    }
}
