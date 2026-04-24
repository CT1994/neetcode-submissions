class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const chars = new Set();
        let L = 0;
        let res = 0;

        for (let R = 0; R < s.length; R++) {
            if (!chars.has(s[R])) {
                chars.add(s[R])
                res = Math.max(res, chars.size);
            }
            else if (s[L] === s[R]) {
                L++
            }
            else {
                chars.clear();
                L = R
            }
        }

        return res;
    }
}
