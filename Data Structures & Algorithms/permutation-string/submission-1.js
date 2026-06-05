class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if (s1.length > s2.length) {
            return false;
        }

        const s1Count = new Map();

        for (const c of s1) {
            s1Count.set(c, (s1Count.get(c) || 0) + 1);
        }

        const s2Count = new Map();
        let need = s1Count.size;
        let l = 0;
        let r = 0;

        while (r < s2.length) {
            const charR = s2[r];
            if (s1Count.has(charR)) {
                s2Count.set(charR, (s2Count.get(charR) || 0) + 1);
                if (s1Count.get(charR) === s2Count.get(charR)) {
                    need--;
                }
            }

            if (r - l + 1 > s1.length) {
                const charL = s2[l];
                if (s1Count.has(charL)) {
                    if (s1Count.get(charL) === s2Count.get(charL)) {
                        need++;
                    }
                    s2Count.set(charL, s2Count.get(charL) - 1);
                }
                l++;
            }

            if (need === 0) {
                return true;
            }

            r++;
        }

        return false;
    }
}
