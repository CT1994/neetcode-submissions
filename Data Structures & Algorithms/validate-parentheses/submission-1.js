class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        for (const c of s) {
            switch(c) {
                case ")":
                    if (stack.pop() !== "(") {
                        return false
                    }
                    break;
                case "}":
                    if (stack.pop() !== "{") {
                        return false
                    }
                    break;
                case "]":
                    if (stack.pop() !== "[") {
                        return false
                    }
                    break;
                default:
                    stack.push(c);
            }
        }

        return stack.length === 0
    }
}
