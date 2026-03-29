class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let deduped = [];

        for (let i = 0; i < nums.length; i++) {
            for (let j = 0; j < deduped.length; j++) {
                if (deduped[j] === nums[i]) {
                    return true;
                }
            }
            
            deduped.push(nums[i])
        }
        return false
    }
}
