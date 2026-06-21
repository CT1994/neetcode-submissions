class Solution {
    /**
     * @param {string} S
     * @return {number[]}
     */
    partitionLabels(S) {
        const lastIndex = new Uint16Array(26);
        const n = S.length;
        const charCodeA = "a".charCodeAt(0);
        for (let i = 0; i < n; i++) {
            lastIndex[S.charCodeAt(i) - charCodeA] = i;
        }

        const res = [];
        let start = 0;
        let end = 0;

        for (let i = 0; i < n; i++) {
            const charIndex = S.charCodeAt(i) - charCodeA;

            if (lastIndex[charIndex] > end) {
                end = lastIndex[charIndex];
            }

            if (i === end) {
                res.push(i - start + 1);
                start = i + 1;
            }
        }

        return res;
    }
}
