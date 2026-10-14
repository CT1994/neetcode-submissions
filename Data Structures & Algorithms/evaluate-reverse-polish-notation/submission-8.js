class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];
        for (const op of tokens) {
            if (op === "*") {
                stack.push(stack.pop() * stack.pop());
            } else if (op === "+") {
                stack.push(stack.pop() + stack.pop());
            } else if (op === "-") {
                const a = stack.pop();
                const b = stack.pop();
                stack.push(b - a);
            } else if (op === "/") {
                const a = stack.pop();
                const b = stack.pop();
                stack.push(Math.trunc(b / a));
            } else {
                stack.push(parseInt(op, 10));
            }
        }
        return stack.pop();
    }
}
