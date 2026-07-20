class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const freqCount = new Uint16Array(26);
        const offset = "A".charCodeAt();
        let res = 0;
        let maxF = 0;
        let L = 0;

        for (let R = 0; R < s.length; R++) {
            const charR = s.charCodeAt(R) - offset;
            freqCount[charR]++;
            maxF = Math.max(maxF, freqCount[charR]);

            while (R - L + 1 - maxF > k) {
                freqCount[s.charCodeAt(L) - offset]--;
                L++;
            }

            res = Math.max(res, R - L + 1);
        }

        return res;
    }
}
