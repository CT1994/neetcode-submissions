class Solution {
    /**
     * @param {number[]} digits
     * @return {number[]}
     */
    plusOne(digits) {
        let i = digits.length - 1;
        let carry = 1;
        while (i >= 0 && carry) {
            if (digits[i] === 9) {
                digits[i] = 0;
            }
            else {
                digits[i] += 1;
                carry = 0
            }
            i--;
        }

        if (carry > 0) {
            digits.unshift(carry);
        }

        return digits;
    }
}
