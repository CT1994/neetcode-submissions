class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        const result = [[]];

        for (let i = 0; i < nums.length; i++) {
            const resultLength = result.length;
            for (let j = 0; j < resultLength; j++) {
                result.push([...result[j], nums[i]])
            }
        }

        return result;
    }
}
