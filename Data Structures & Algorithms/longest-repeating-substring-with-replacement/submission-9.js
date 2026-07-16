class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const freq = new Uint16Array(26);
        const offset = 65;
        const len = s.length;

        let maxF = 0;
        let L = 0;

        for (let R = 0; R < len; R++) {
            const rChar = s.charCodeAt(R) - offset;
            freq[rChar]++;
            
            // Track the maximum frequency of any single character seen so far
            if (freq[rChar] > maxF) {
                maxF = freq[rChar];
            }

            // If the current window is invalid, slide it forward by 1
            // (Using 'if' instead of 'while' keeps our max window size intact)
            if (R - L + 1 - maxF > k) {
                freq[s.charCodeAt(L) - offset]--;
                L++;
            }
        }

        // The maximum window size achieved is always the final size
        return len - L;
    }
}