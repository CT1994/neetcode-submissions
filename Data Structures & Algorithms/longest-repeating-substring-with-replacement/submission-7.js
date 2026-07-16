class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const freq = new Uint16Array(26);
        const offset = "A".charCodeAt(0);

        let res = 0;
        let L = 0;
        let maxF = 0;
        for (let R = 0; R < s.length; R++) {
            const rChar = s.charCodeAt(R) - offset;
            freq[rChar] += 1;
            maxF = Math.max(maxF, freq[rChar]);

            while (R - L + 1 - maxF > k) {
                freq[s.charCodeAt(L) - offset]--;
                L++;
            }
            res = Math.max(res, R - L + 1);
        }

        return res;
    }
}
