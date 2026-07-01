class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        const stack = [];
        let total = 0;

        for (const s of operations) {
            switch (s) {
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
                    stack.push(Number(s));
                    total += Number(s);
            }
        }

        return total;
    }
}
