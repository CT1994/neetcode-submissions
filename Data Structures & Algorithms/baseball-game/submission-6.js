class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        const stack = [];
        let total = 0;
        for (const o of operations) {
            switch (o) {
                case "+":
                    stack.push(stack[stack.length - 1] + stack[stack.length - 2]);
                    total += stack[stack.length - 1];
                    break;
                case "D":
                    stack.push(stack[stack.length - 1] * 2);
                    total += stack[stack.length - 1];
                    break;
                case "C":
                    total -= stack.pop();
                    break;
                default:
                    stack.push(Number(o));
                    total += Number(o);
            }
        }
        return total;
    }
}
