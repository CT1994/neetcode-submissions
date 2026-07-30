class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        let res = "";

        for (let i = 0; i < s.length; i++) {
            let l = i;
            let r = i;
            while (l >= 0 && r < s.length && s[l] === s[r]) {
                if (r - l + 1 > res.length) {
                    res = s.slice(l, r + 1);
                }
                l--;
                r++;
            }

            l = i;
            r = i + 1;
            while (l >= 0 && r < s.length && s[l] === s[r]) {
                if (r - l + 1 > res.length) {
                    res = s.slice(l, r + 1);
                }
                l--;
                r++;
            }
        }
        return res;
    }
}
