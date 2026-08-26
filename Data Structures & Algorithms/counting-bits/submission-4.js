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
        let count = 0;
        while (n) {
            if (n & 1) count++;
            n = n >> 1;
        }
        return count;
    }
}
