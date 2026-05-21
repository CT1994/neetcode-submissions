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

            for (const [key, value] of count.entries()) {
                if (value > 1) {
                    count.set(key, value - 1)
                }
                else {
                    count.delete(key)
                }
            }
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
