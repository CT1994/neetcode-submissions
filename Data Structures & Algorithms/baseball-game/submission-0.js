class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        const result = [];

        for (let i = 0; i < operations.length; i++) {
            switch(operations[i]) {
                case "D":
                    result.push(result[result.length - 1] * 2);
                    break;
                case "C":
                    result.pop();
                    break;
                case "+":
                    result.push(result[result.length - 1] + result[result.length - 2]);
                    break;
                default:
                    result.push(parseInt(operations[i]))
            }
        }

        let total = 0;
        for (let i = 0; i < result.length; i++) {
            total += result[i]
        }

        return total
    }
}
