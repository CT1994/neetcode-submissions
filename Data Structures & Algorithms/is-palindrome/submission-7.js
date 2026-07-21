class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let L = 0;
        let R = s.length - 1;

        while (L < R) {
            while (L < R && !this.isAlphanumeric(s[L])) {
                L++;
            }

            while (L < R && !this.isAlphanumeric(s[R])) {
                R--;
            }

            if (s[L].toLowerCase() !== s[R].toLowerCase()) {
                return false;
            }
            L++;
            R--;
        }

        return true;
    }

    isAlphanumeric(s) {
        return ("a" <= s && s <= "z") || ("A" <= s && s <= "Z") || ("0" <= s && s <= "9");
    }
}
