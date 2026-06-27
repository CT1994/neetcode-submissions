class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    firstMissingPositive(nums) {
        const unique = new Set();
        
        for (const num of nums) {
            if (num > 0) {
                unique.add(num)
            }
        }

        let res = 1;
        while (unique.has(res)) {
            res++
        }

        return res
    }
}
