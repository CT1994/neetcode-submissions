class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let i = 0;
        for (const n of nums) {
            if (n !== val) {
                nums[i] = n;
                i++;
            }
        }
        return i;
    }
}
