class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set(nums);
        let res = 0;

        for (const n of set) {
            if (!set.has(n - 1)) {
                let count = 1;
                let i = n;
                while (set.has(i + 1)) {
                    count++;
                    i++;
                }
                res = Math.max(res, count);
            }
        }

        return res;
    }
}
