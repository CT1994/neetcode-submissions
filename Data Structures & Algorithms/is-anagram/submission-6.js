class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;

        const count = new Uint16Array(26);
        const offset = "a".charCodeAt(0);
        for (let i = 0; i < s.length; i++) {
            count[s.charCodeAt(i) - offset]++;
            count[t.charCodeAt(i) - offset]--;
        }

        for (let i = 0; i < count.length; i++) {
            if (count[i] !== 0) return false;
        }

        return true;
    }
}
