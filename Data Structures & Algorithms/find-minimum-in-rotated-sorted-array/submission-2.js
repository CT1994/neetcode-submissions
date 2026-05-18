class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let i = 0;

        while (i < nums.length) {
            const left = nums[i - 1] ?? nums[nums.length -1];
            const mid = nums[i];
            const right = nums[i + 1] ?? nums[0]
            if (left >= mid && mid <= right) {
                return mid
            }
            i++
        }
    }
}
