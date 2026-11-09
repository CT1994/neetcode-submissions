class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (t.length > s.length) return "";
        const required = new Map();
        const matches = new Map();
        for (const c of t) {
            required.set(c, (required.get(c) || 0) + 1);
            matches.set(c, 0);
        }
        let remaining = required.size;
        let res = "a".repeat(s.length + 1);

        let l = 0;
        let r = 0;
        while (r < s.length) {
            const rChar = s[r];
            if (matches.has(rChar)) {
                matches.set(rChar, matches.get(rChar) + 1);
                if (required.get(rChar) === matches.get(rChar)) {
                    remaining--;
                }
            }

            while (remaining === 0) {
                if (r - l + 1 < res.length) {
                    res = s.slice(l, r + 1);
                }
                const lChar = s[l];
                if (matches.has(lChar)) {
                    if (required.get(lChar) === matches.get(lChar)) {
                        remaining++;
                    }
                    matches.set(lChar, matches.get(lChar) - 1);
                }
                l++;
            }
            r++;
        }
        console.log(required);
        console.log(matches);
        return res.length === s.length + 1 ? "" : res;
    }
}
