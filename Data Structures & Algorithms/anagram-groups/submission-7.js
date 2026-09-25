class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = {};
        const offset = "a".charCodeAt(0);
        for (const str of strs) {
            const count = new Uint16Array(26);
            for (const s of str) {
                count[s.charCodeAt(0) - offset]++;
            }

            const key = count.join(",");
            if (!map[key]) {
                map[key] = [];
            }
            map[key].push(str);
        }

        return Object.values(map);
    }
}
