class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map();
        
        for (let i = 0; i < nums.length; i++) {
            const array = map.get(nums[i]) || [];
            array.push(i);
            map.set(nums[i], array)
        }

        for (const [key, value] of map) {
            const x = target - key
            
            if (map.has(x)) {
                const result = new Set([...value, ...map.get(x)]);
                if (result.size === 2) {
                    return Array.from(result)
                }
            }
        }

        return []
    }
}
