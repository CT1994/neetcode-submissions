class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freq = {};
        for (const num of nums) {
            if (!freq[num]) {
                freq[num] = 0;
            }
            freq[num]++;
        }

        const count = Array.from({ length: nums.length + 1 }, () => []);
        for (const key in freq) {
            count[freq[key]].push(key);
        }

        const res = [];
        for (let i = count.length - 1; i >= 0; i--) {
            for (let j = 0; j < count[i].length; j++) {
                res.push(count[i][j]);
                if (res.length === k) break;
            }
            if (res.length === k) break;
        }

        return res;
    }
}
