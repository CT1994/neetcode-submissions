class Solution {
    /**
     * @param {number} n
     * @return {number[]}
     */
    countBits(n) {
        let res = [];
        for (let i = 0; i <= n; i++) {
            res.push(this.count(i));
        }
        return res;
    }

    count(n) {
        let res = 0;
        while (n) {
            if (n & 1) res++;
            n = n >> 1;
        }
        return res;
    }
}
