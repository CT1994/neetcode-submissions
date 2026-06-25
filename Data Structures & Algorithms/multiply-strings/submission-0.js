class Solution {
    /**
     * @param {string} num1
     * @param {string} num2
     * @return {string}
     */
    multiply(num1, num2) {
        if (num1 === "0" || num2 === "0") return "0";

        const res = new Array(num1.length + num2.length).fill(0);

        for (let i = num1.length - 1; i >= 0; i--) {
            for (let j = num2.length - 1; j >= 0; j--) {
                const mul = Number(num1[i]) * Number(num2[j]);

                // p2 is the current position, p1 is the carry position to its left
                const p1 = i + j;
                const p2 = i + j + 1;

                const sum = mul + res[p2];

                res[p2] = sum % 10; // Store the single digit
                res[p1] += Math.floor(sum / 10); // Pass the carry to the left
            }
        }

        let result = "";
        let i = res[0] === 0 ? 1 : 0;
        while (i < res.length) {
            result += res[i];
            i++;
        }

        return result;
    }
}
