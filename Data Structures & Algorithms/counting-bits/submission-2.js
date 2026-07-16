class Solution {
    /**
     * @param {number} n
     * @return {number[]}
     */
    countBits(n) {
        let res = [];
        for (let i = 0; i <= n; i++) {
            let count = 0;
            let j = i;
            while (j > 0) {
                if (j & 1) {
                    count++;
                }

                j = j >> 1;
            }
            res.push(count);
        }
        return res;
    }
}
