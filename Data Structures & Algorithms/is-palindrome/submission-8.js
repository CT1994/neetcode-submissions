class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let l = 0;
        let r = s.length - 1;

        while (l < r) {
            while (l < r && !this.isAlphanumeric(s[l])) {
                l++;
            }

            while (l < r && !this.isAlphanumeric(s[r])) {
                r--;
            }

            console.log(s[l].toLowerCase(), s[r].toLowerCase())

            if (s[l].toLowerCase() !== s[r].toLowerCase()) return false;
            l++;
            r--;
        }

        return true;
    }

    isAlphanumeric(s) {
        return ("a" <= s && s <= "z") || ("A" <= s && s <= "Z") || ("0" <= s && s <= "9");
    }
}
