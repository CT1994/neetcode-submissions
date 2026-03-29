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
            sMap.set(s.charAt(i), sMap.get(s.charAt(i)) + 1 || 1)
            tMap.set(t.charAt(i), tMap.get(t.charAt(i)) + 1 || 1)
        }

        for (const [key, value] of sMap) {
            if (tMap.get(key) !== value) {
                return false;
            }
        }
        
        return true
    }
}
