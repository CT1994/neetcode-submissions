class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        const stack = [];
        for (const op of operations) {
            switch (op) {
                case "+":
                    stack.push(stack[stack.length - 1] + stack[stack.length - 2]);
                    break;
                case "D":
                    stack.push(stack[stack.length - 1] * 2);
                    break;
                case "C":
                    stack.pop();
                    break;
                default:
                    stack.push(Number(op));
            }
        }

        return stack.reduce((acc, val) => (acc += val), 0);
    }
}
