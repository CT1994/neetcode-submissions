class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const charCounts = new Int32Array(26);
        let left = 0;
        let maxLength = 0;
        let maxFrequency = 0;

        for (let right = 0; right < s.length; right++) {
            const charIdx = s.charCodeAt(right) - 65;
            charCounts[charIdx]++;
            
            maxFrequency = Math.max(maxFrequency, charCounts[charIdx]);

            if (right - left + 1 - maxFrequency > k) {
                charCounts[s.charCodeAt(left) - 65]--;
                left++;
            }

            maxLength = Math.max(maxLength, right - left + 1);
        }

        return maxLength;
    }
}