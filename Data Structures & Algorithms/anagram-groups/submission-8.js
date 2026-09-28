class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const res = {};
        for (const str of strs) {
            const arr = new Array(26).fill(0);
            for (const c of str) {
                arr[c.charCodeAt(0) - "a".charCodeAt(0)]++;
            }

            const key = arr.join(",");
            if (!res[key]) {
                res[key] = [];
            }
            res[key].push(str);
        }
        return Object.values(res);
    }
}
