class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let set = new Set();
        while (nums.length) {
            let num = nums.pop();
            if (set.has(num)) {
                return true
            }
            set.add(num);
        }

        return false;
    }
}
