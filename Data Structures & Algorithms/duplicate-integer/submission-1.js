class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let deduped = [];

        for (let i = 0; i < nums.length; i++) {
            if (deduped.includes(nums[i])) {
                return true;
            }
            deduped.push(nums[i])
        }
        return false
    }
}
