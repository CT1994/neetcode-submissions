class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let res = 0;
        const set = new Set(nums);
        for (const n of nums) {
            if (set.has(n - 1)) {
                continue;
            }

            let count = 1;
            let i = n;
            while (set.has(i + 1)) {
                count++;
                i++;
            }

            res = Math.max(res, count);
        }
        return res;
    }
}
