class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (t.length > s.length) return "";

        const count = new Map();
        for (const c of t) {
            count.set(c, (count.get(c) || 0) + 1);
        }

        let res = "a".repeat(s.length + 1);
        const required = count.size;
        let matches = 0;
        let l = 0;
        let r = 0;

        while (r < s.length) {
            const rChar = s[r];
            if (count.has(rChar)) {
                count.set(rChar, count.get(rChar) - 1);
                if (count.get(rChar) === 0) {
                    matches++;
                }
            }

            while (matches === required) {
                if (r - l + 1 < res.length) {
                    res = s.substring(l, r + 1);
                }
                const lChar = s[l];
                if (count.has(lChar)) {
                    count.set(lChar, count.get(lChar) + 1);
                    if (count.get(lChar) > 0) {
                        matches--;
                    }
                }
                l++;
            }
            r++;
        }

        return res.length === s.length + 1 ? "" : res;
    }
}
