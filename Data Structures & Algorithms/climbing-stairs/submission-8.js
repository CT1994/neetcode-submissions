class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        let one = 1;
        let two = 1;
        while (n > 1) {
            const tmp = one;
            one += two;
            two = tmp;
            n--;
        }
        return one;
    }
}
