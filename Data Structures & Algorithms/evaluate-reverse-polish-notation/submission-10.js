class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];
        for (const o of tokens) {
            if (o === "+") {
                const a = stack.pop();
                const b = stack.pop();
                stack.push(b + a);
            } else if (o === "-") {
                const a = stack.pop();
                const b = stack.pop();
                stack.push(b - a);
            } else if (o === "*") {
                const a = stack.pop();
                const b = stack.pop();
                stack.push(b * a);
            } else if (o === "/") {
                const a = stack.pop();
                const b = stack.pop();
                stack.push(Math.trunc(b / a));
            } else {
                stack.push(parseInt(o));
            }
        }
        return stack.pop();
    }
}
