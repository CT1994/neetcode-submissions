class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        const result = [];
        let res = 0

        for (let i = 0; i < operations.length; i++) {
            switch(operations[i]) {
                case "D":
                    result.push(result[result.length - 1] * 2);
                    res += result[result.length - 1]
                    break;
                case "C":
                    res -= result.pop();
                    break;
                case "+":
                    result.push(result[result.length - 1] + result[result.length - 2]);
                    res += result[result.length - 1]
                    break;
                default:
                    result.push(parseInt(operations[i]));
                    res += parseInt(operations[i])
            }
        }

        return res
    }
}
