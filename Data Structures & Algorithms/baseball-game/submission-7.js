class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        const stack = [];
        let total = 0;
        for (const o of operations) {
            if (o === "+") {
                stack.push(stack[stack.length - 1] + stack[stack.length - 2]);
                total += stack[stack.length - 1];
            } else if (o === "D") {
                stack.push(stack[stack.length - 1] * 2);
                total += stack[stack.length - 1];
            } else if (o === "C") {
                total -= stack[stack.length - 1];
                stack.pop();
            } else {
                stack.push(parseInt(o, 10));
                total += stack[stack.length - 1];
            }
        }
        return total;
    }
}
