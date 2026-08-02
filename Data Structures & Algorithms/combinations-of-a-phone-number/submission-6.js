class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits) {
        if (digits.length === 0) return [];
        const res = [];
        const digitToChar = {
            2: "abc",
            3: "def",
            4: "ghi",
            5: "jkl",
            6: "mno",
            7: "pqrs",
            8: "tuv",
            9: "wxyz",
        };

        const dfs = (i, curStr) => {
            if (i === digits.length) {
                res.push(curStr);
                return;
            }

            for (const c of digitToChar[digits[i]]) {
                dfs(i + 1, curStr + c);
            }
        };

        dfs(0, "");
        return res;
    }
}
