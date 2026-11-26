class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const count = {};
        for (const n of nums) {
            count[n] = (count[n] || 0) + 1;
        }
        const bucket = Array.from({ length: nums.length + 1 }, () => []);
        for (const key in count) {
            bucket[count[key]].push(key);
        }

        const res = [];
        for (let i = bucket.length - 1; i >= 0; i--) {
            for (const n of bucket[i]) {
                res.push(n);
                if (res.length === k) return res;
            }
        }
        return res;
    }
}
