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
        for (let n of nums) {
            if (set.has(n - 1)) {
                continue;
            }

            let count = 1;
            while (set.has(n + 1)) {
                count++;
                n++;
            }

            res = Math.max(res, count);
        }

        return res;
    }
}
