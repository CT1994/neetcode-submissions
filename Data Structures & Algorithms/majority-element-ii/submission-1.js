class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {
        let count = new Map();

        for (const num of nums) {
            count.set(num, (count.get(num) || 0) + 1);

            if (count.size < 3) {
                continue;
            }

            const newCount = new Map();
            for (const [key, value] of count.entries()) {
                if (value > 1) {
                    newCount.set(key, value - 1)
                }
            }
            count = newCount
        }

        const res = []
        for (const [key] of count.entries()) {
            const frequency = nums.filter((num) => num === key).length
            if (frequency > Math.floor(nums.length / 3)) {
                res.push(key)
            }
        }

        return res
    }
}
