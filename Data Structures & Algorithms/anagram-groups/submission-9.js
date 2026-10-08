class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = {};
        const offset = "a".charCodeAt(0);

        for (const str of strs) {
            let arr = new Array(26).fill(0);
            for (const s of str) {
                arr[s.charCodeAt(0) - offset]++;
            }

            const key = arr.join(",");
            if (!map[key]) {
                map[key] = [];
            }

            map[key].push(str);
        }

        return Object.values(map);
    }
}
