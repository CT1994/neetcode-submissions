class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        const brackets = {
            ")": "(",
            "}": "{",
            "]": "[",
        }

        for (const c of s) {
            if (brackets[c]) {
                if (brackets[c] !== stack.pop()) {
                    return false;
                }
            }
            else {
                stack.push(c)
            }
        }

        return stack.length === 0;
    }
}
