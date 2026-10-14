class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if (s1.length > s2.length) return false;

        const offset = "a".charCodeAt(0);
        const s1Count = new Array(26).fill(0);
        const s2Count = new Array(26).fill(0);
        for (let i = 0; i < s1.length; i++) {
            s1Count[s1.charCodeAt(i) - offset]++;
            s2Count[s2.charCodeAt(i) - offset]++;
        }

        let matches = 0;

        for (let i = 0; i < 26; i++) {
            if (s1Count[i] === s2Count[i]) {
                matches++;
            }
        }

        let l = 0;
        for (let r = s1.length; r < s2.length; r++) {
            if (matches === 26) return true;

            let idx = s2.charCodeAt(r) - offset;
            s2Count[idx]++;
            if (s1Count[idx] === s2Count[idx]) {
                matches++;
            } else if (s1Count[idx] + 1 === s2Count[idx]) {
                matches--;
            }

            idx = s2.charCodeAt(l) - offset;
            s2Count[idx]--;
            if (s1Count[idx] === s2Count[idx]) {
                matches++;
            } else if (s1Count[idx] - 1 === s2Count[idx]) {
                matches--;
            }
            l++;
        }

        return matches === 26;
    }
}
