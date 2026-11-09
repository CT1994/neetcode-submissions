class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        const stack = [];
        let total = 0;
        const len = operations.length;

        for (let i = 0; i < len; i++) {
            const o = operations[i];
            
            if (o === "+") {
                const val = stack[stack.length - 1] + stack[stack.length - 2];
                stack.push(val);
                total += val;
            } else if (o === "D") {
                const val = stack[stack.length - 1] * 2;
                stack.push(val);
                total += val;
            } else if (o === "C") {
                total -= stack.pop();
            } else {
                const val = +o;
                stack.push(val);
                total += val;
            }
        }
        
        return total;
    }
}