class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set();
        for (const n of nums) {
            set.add(n);
        }

        let res = 0;
        for (let i = 0; i < nums.length; i++) {
            let count = 1;
            let n = nums[i];
            while (set.has(n + 1)) {
                count++;
                n++;
            }
            res = Math.max(res, count);
        }
        return res;
    }
}
