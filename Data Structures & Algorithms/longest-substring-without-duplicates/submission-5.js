class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const charSet = new Set();
        let res = 0;
        let l = 0;
        for (let r = 0; r < s.length; r++) {
            const rChar = s.charCodeAt(r);
            while (charSet.has(rChar)) {
                charSet.delete(s.charCodeAt(l));
                l++;
            }
            charSet.add(rChar);
            res = Math.max(res, r - l + 1);
        }

        return res;
    }
}
