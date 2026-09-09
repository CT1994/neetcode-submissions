class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const charSet = new Set();
        let res = 0;
        let l = 0;
        let r = 0;
        while (r < s.length) {
            const rChar = s.charCodeAt(r);
            while (charSet.has(rChar)) {
                const lChar = s.charCodeAt(l);
                charSet.delete(lChar);
                l++;
            }
            charSet.add(rChar);
            res = Math.max(res, r - l + 1);
            r++;
        }
        return res;
    }
}
