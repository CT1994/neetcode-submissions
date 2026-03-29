class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const result = {};

        for (let str of strs) {
            const key = new Array(26).fill(0);
            for (let char of str) {
                let idx = char.charCodeAt() - "a".charCodeAt();
                key[idx] += 1;
            }
            if (!result[key]) {
                result[key] = [];
            }

            result[key].push(str)
        }

        return Object.values(result)
    }
}
