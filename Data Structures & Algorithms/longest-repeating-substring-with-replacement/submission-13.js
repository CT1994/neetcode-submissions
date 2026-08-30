class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let res = 0;
        const freq = new Map();
        let maxFreq = 0;
        let l = 0;
        let r = 0;
        while (r < s.length) {
            const rChar = s.charCodeAt(r);
            freq.set(rChar, (freq.get(rChar) || 0) + 1);
            maxFreq = Math.max(maxFreq, freq.get(rChar));
            if (r - l + 1 - maxFreq > k) {
                const lChar = s.charCodeAt(l);
                freq.set(lChar, freq.get(lChar) - 1);
                l++;
            }
            res = Math.max(res, r - l + 1);
            r++;
        }
        return res;
    }
}
