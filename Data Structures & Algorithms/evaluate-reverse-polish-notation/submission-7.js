class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];
        for (let c of tokens) {
            if (c === "+") {
                const a = stack.pop();
                const b = stack.pop();
                stack.push(b + a);
            } else if (c === "*") {
                const a = stack.pop();
                const b = stack.pop();
                stack.push(b * a);
            } else if (c === "-") {
                const a = stack.pop();
                const b = stack.pop();
                stack.push(b - a);
            } else if (c === "/") {
                const a = stack.pop();
                const b = stack.pop();
                stack.push(Math.trunc(b / a));
            } else {
                stack.push(parseInt(c, 10));
            }
        }

        return stack[0];
    }
}
