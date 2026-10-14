class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (t.length > s.length) return "";

        const matches = new Map();
        for (const c of t) {
            matches.set(c, (matches.get(c) || 0) + 1);
        }

        let res = "a".repeat(s.length + 1);
        let required = matches.size;
        let l = 0;
        let r = 0;
        while (r < s.length) {
            const rChar = s[r];
            if (matches.has(rChar)) {
                matches.set(rChar, matches.get(rChar) - 1);
                if (matches.get(rChar) === 0) {
                    required--;
                }
            }

            while (required === 0) {
                if (r - l + 1 < res.length) {
                    res = s.substring(l, r + 1);
                }
                const lChar = s[l];
                if (matches.has(lChar)) {
                    matches.set(lChar, matches.get(lChar) + 1);
                    if (matches.get(lChar) > 0) {
                        required++;
                    }
                }
                l++;
            }
            r++;
        }

        return res.length === s.length + 1 ? "" : res;
    }
}
