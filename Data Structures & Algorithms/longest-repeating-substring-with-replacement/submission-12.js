class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const freqCount = new Map();
        let res = 0;
        let maxCur = 0;
        let l = 0;
        for (let r = 0; r < s.length; r++) {
            const rChar = s.charCodeAt(r);
            freqCount.set(rChar, (freqCount.get(rChar) || 0) + 1);
            maxCur = Math.max(maxCur, freqCount.get(rChar));
            while (r - l + 1 - maxCur > k) {
                const lChar = s.charCodeAt(l);
                const count = freqCount.get(lChar) - 1;
                freqCount.set(lChar, count);
                l++;
            }
            res = Math.max(res, r - l + 1);
        }

        return res;
    }
}
