class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        const freq = new Map();
        const window = new Map();

        for (const c of t) {
            window.set(c, 0);
            freq.set(c, (freq.get(c) || 0) + 1);
        }

        const need = freq.size;
        let have = 0;
        let l = 0;
        let r = 0;
        let res = [-1, -1];
        let resLen = Infinity;

        while (r < s.length) {
            if (window.has(s[r])) {
                window.set(s[r], window.get(s[r]) + 1);

                if (window.get(s[r]) === freq.get(s[r])) {
                    have++;
                }
            }

            while (have === need) {
                if (r - l + 1 < resLen) {
                    resLen = r - l + 1;
                    res = [l, r];
                }

                if (window.has(s[l])) {
                    window.set(s[l], window.get(s[l]) - 1);
                    if (window.get(s[l]) < freq.get(s[l])) {
                        have--;
                    }
                }
                l++;
            }
            r++;
        }

        return resLen === Infinity ? "" : s.slice(res[0], res[1] + 1);
    }
}
