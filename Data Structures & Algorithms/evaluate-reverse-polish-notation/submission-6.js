class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];
        for (const str of tokens) {
            if (str === "+") {
                stack.push(stack.pop() + stack.pop());
            } else if (str === "-") {
                const a = stack.pop();
                const b = stack.pop();
                stack.push(b - a);
            } else if (str === "*") {
                stack.push(stack.pop() * stack.pop());
            } else if (str === "/") {
                const a = stack.pop();
                const b = stack.pop();
                stack.push(Math.trunc(b / a));
            } else {
                stack.push(parseInt(str, 10));
            }
        }
        return stack[0];
    }
}
