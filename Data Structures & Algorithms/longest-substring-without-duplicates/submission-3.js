class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const set = new Set();
        let res = 0;
        let L = 0;

        for (let R = 0; R < s.length; R++) {
            while (set.has(s[R])) {
                set.delete(s[L]);
                L++;
            }

            set.add(s[R]);
            res = Math.max(res, R - L + 1);
        }

        return res;
    }
}
