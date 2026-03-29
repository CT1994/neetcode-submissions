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

        console.log(bucket)
        const result = []
        while (result.length < k) {
            const values = bucket.pop();
            if (values) {
                result.push(...values)
            }
        }

        return result
    }
}
