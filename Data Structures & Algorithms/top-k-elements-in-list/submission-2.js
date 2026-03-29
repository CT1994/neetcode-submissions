class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const numCount = {};

        nums.forEach(num => {
            if (!numCount[num]) {
                numCount[num] = 0
            }

            numCount[num] = numCount[num] + 1
        })

        let bucket = [];
        
        for (const key in numCount) {
            const count = numCount[key];
            if (!bucket[count]) {
                bucket[count] = []
            }

            bucket[count].push(key)
        }

        const result = []
        while (result.length < k) {
            const values = bucket.pop();
            if (values) {
                for (const v of values) {
                    if (result.length < k) {
                        result.push(Number(v));
                    }
                }
            }
        }

        return result
    }
}
