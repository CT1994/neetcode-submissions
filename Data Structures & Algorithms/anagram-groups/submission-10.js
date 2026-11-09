class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const res = {};

        const offset = "a".charCodeAt(0);
        for (const str of strs) {
            const count = new Array(26).fill(0);
            for (let i = 0; i < str.length; i++) {
                count[str.charCodeAt(i) - offset]++;
            }
            const key = count.join(",");
            if (!res[key]) res[key] = [];
            res[key].push(str);
        }

        return Object.values(res);
    }
}
