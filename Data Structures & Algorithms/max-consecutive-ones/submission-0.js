class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let largestCount = 0;
        let currentCount = 0;

        for (let i = 0; i < nums.length; i++) {
            const value = nums[i];

            if (value === 1) {
                currentCount += 1;
            }
            else {
                currentCount = 0;
            }
            
            if (currentCount > largestCount) {
                largestCount = currentCount
            }
        }

        return largestCount
    }
}
