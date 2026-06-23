class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    isHappy(n) {
        const visit = new Set();

        while (!visit.has(n)) {
            visit.add(n);
            n = this.sumOfSquares(n);
            if (n === 1) {
                return true
            }
        }

        return false;
    }

    sumOfSquares(n) {
        let sum = 0;

        while (n > 0) {
            let digit = n % 10;
            digit *= digit;
            sum += digit;
            n = Math.floor(n / 10);
        }

        return sum;
    }
}
