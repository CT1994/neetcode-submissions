class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    check(nums) {
        let N = nums.length;
        let M = N * 2;
        let count = 1;

        for (let i = 1; i < M; i++) {
            if (count === N) {
                return true;
            } else if (nums[(i - 1) % N] <= nums[i % N]) {
                count++;
            } else {
                count = 1;
            }
        }

        return N === count;
    }
}
