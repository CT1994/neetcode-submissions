class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let l = 0;
        let r = s.length - 1;
        while (l < r) {
            while (l < r && !this.isAlphanumeric(s[l])) l++;
            while (l < r && !this.isAlphanumeric(s[r])) r--;
            if (s[l].toLowerCase() !== s[r].toLowerCase()) return false;
            l++;
            r--;
        }
        return true;
    }

    isAlphanumeric(c) {
        return ("a" <= c && c <= "z") || ("A" <= c && c <= "Z") || ("0" <= c && c <= "9");
    }
}
