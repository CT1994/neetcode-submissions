class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freq = {};
        for (const num of nums) {
            freq[num] = (freq[num] || 0) + 1;
        }

        const bucketSort = Array.from({ length: nums.length + 1 }, () => []);
        for (const key in freq) {
            bucketSort[freq[key]].push(key);
        }

        const res = [];
        for (let i = bucketSort.length - 1; i >= 0; i--) {
            for (let j = bucketSort[i].length - 1; j >= 0; j--) {
                res.push(bucketSort[i][j]);
                if (res.length === k) return res;
            }
        }

        return res;
    }
}
