class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    firstMissingPositive(nums) {
        const n = nums.length;
        let i = 0;

        while (i < n) {
            // if num is < 1 or greater than range skip
            if (nums[i] <= 0 || nums[i] > n) {
                i++;
                continue;
            }

            // nums[1] === 1
            // index === 0
            const index = nums[i] - 1;
            if (nums[i] !== nums[index]) {
                [nums[i], nums[index]] = [nums[index], nums[i]];
            } else {
                i++;
            }
        }
        console.log(nums);

        // assuming the list is sorted 0 index = 1
        for (let i = 0; i < n; i++) {
            if (nums[i] !== i + 1) {
                return i + 1;
            }
        }

        return n + 1;
    }
}
