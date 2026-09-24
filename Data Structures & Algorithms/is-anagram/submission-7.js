class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;
        const offset = "a".charCodeAt();
        const n = s.length;
        const sArray = new Uint16Array(26);
        const tArray = new Uint16Array(26);

        for (let i = 0; i < n; i++) {
            sArray[s.charCodeAt(i) - offset]++;
            tArray[t.charCodeAt(i) - offset]++;
        }

        return sArray.join("") === tArray.join("");
    }
}
