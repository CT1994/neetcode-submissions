class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false;
        }

        let sMap = new Map();
        let tMap = new Map();

        for (let i = 0; i < s.length; i++) {
            let char = s.charAt(i);
            if (sMap.has(char)) {
                sMap.set(char, sMap.get(char) + 1)
            }
            else {
                sMap.set(char, 1);
            }
        }

        for (let i = 0; i < t.length; i++) {
            let char = t.charAt(i);
            if (tMap.has(char) > 0) {
                tMap.set(char, tMap.get(char) + 1)
            }
            else {
                tMap.set(char, 1);
            }
        }

        for (const [key, value] of sMap) {
            if (tMap.get(key) !== value) {
                return false;
            }
        }
        
        return true
    }
}
