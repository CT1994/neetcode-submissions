class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {
        const res = new Set();
        const freq = {};
        const m = Math.floor(nums.length / 3);

        for (const num of nums) {
            if (!freq[num]) {
                freq[num] = 0
            }

            if (++freq[num] > m) {
                res.add(num)
            }
        }

        return [...res]
    }
}
