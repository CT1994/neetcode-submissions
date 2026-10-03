class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        const need = new Int32Array(128);

        for (let i = 0; i < t.length; i++) {
            need[t.charCodeAt(i)]++;
        }

        let missing = t.length;
        let left = 0;

        let bestStart = 0;
        let bestLength = Infinity;

        for (let right = 0; right < s.length; right++) {
            const rightCode = s.charCodeAt(right);

            if (need[rightCode] > 0) {
                missing--;
            }

            need[rightCode]--;

            while (missing === 0) {
                const length = right - left + 1;

                if (length < bestLength) {
                    bestLength = length;
                    bestStart = left;
                }

                const leftCode = s.charCodeAt(left);
                need[leftCode]++;

                if (need[leftCode] > 0) {
                    missing++;
                }

                left++;
            }
        }

        return bestLength === Infinity ? "" : s.slice(bestStart, bestStart + bestLength);
    }
}
