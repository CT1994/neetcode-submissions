class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    jump(nums) {
        let res = 0;
        let l = 0;
        let r = 0

        while (r < nums.length - 1) {
            res++
            let furthest = 0;
            for (let i = l; i <= r; i++) {
                furthest = Math.max(furthest, i + nums[i])
            }
            l = r + 1;
            r = furthest;
        }

        return res
    }
}
