class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;
        const count = new Uint32Array(26);
        const offset = "a".charCodeAt(0);

        for (let i = 0; i < s.length; i++) {
            count[s[i].charCodeAt(0) - offset]++;
            count[t[i].charCodeAt(0) - offset]--;
        }

        return count.every((val) => val === 0);
    }
}
