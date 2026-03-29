class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let dedupped = [];

        for (let i = 0; i < nums.length; i++) {
            if (dedupped.includes(nums[i])) {
                return true;
            }

            dedupped.push(nums[i]);
        }

        return false
    }
}
