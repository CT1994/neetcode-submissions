class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map();

        for (let i = 0; i < nums.length; i++) {
            const r = target - nums[i];
            if (map.has(r)) {
                return [map.get(r), i];
            }
            map.set(nums[i], i);
        }
    }
}
