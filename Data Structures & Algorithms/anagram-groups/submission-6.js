class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();
        const offset = "a".charCodeAt();
        for (const str of strs) {
            const arr = new Uint32Array(26);
            for (let i = 0; i < str.length; i++) {
                arr[str.charCodeAt(i) - offset]++;
            }

            const key = arr.join();
            if (!map.has(key)) {
                map.set(key, []);
            }

            map.get(key).push(str);
        }

        return [...map.values()];
    }
}
