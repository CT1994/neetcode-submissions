class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        const closingBracket = {
            ")": "(",
            "}": "{",
            "]": "[",
        };

        for (const b of s) {
            if (b in closingBracket) {
                if (stack.pop() !== closingBracket[b]) return false;
            } else {
                stack.push(b);
            }
        }

        return stack.length === 0;
    }
}
