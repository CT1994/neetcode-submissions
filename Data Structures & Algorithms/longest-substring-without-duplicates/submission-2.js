class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const map = new Map();
        let L = 0;
        let res = 0;

        for (let R = 0; R < s.length; R++) {
            if (map.has(s[R])) {
                L = Math.max(map.get(s[R]) + 1, L);
            }

            map.set(s[R], R);
            res = Math.max(res, R - L + 1)
        }

        return res;
    }
}
