class Solution {
    /**
     * @param {number} x
     * @param {number} n
     * @return {number}
     */
    myPow(x, n) {
        let res = 1;
        while (n > 0) {
            res *= x;
            n--;
        }

        while (n < 0) {
            res /= x;
            n++;
        }

        return res;
    }
}
