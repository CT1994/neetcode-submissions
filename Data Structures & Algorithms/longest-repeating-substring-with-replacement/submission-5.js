class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const count = new Array(26).fill(0);
        let L = 0;
        let res = 0;
        let maxF = 0;

        for (let R = 0; R < s.length; R++) {
            const index = s[R].charCodeAt() - 65
            count[index]++
            maxF = Math.max(maxF, count[index]);
            if (R - L + 1 - maxF > k) {
                count[s[L].charCodeAt() - 65]--
                L++;
            }

            res = Math.max(res, R - L + 1);
        }

        return res;
    }
}
