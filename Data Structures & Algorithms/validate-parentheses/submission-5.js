class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const closeToOpen = {
            "}": "{",
            ")": "(",
            "]": "[",
        };
        const stack = [];
        for (const b of s) {
            if (closeToOpen[b]) {
                if (stack.pop() !== closeToOpen[b]) return false;
            } else {
                stack.push(b);
            }
        }

        return stack.length === 0;
    }
}
