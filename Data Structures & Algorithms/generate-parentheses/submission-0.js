class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        const res = [];
        const dfs = (openN, closedN, str) => {
            if (openN === closedN && openN === n) {
                res.push(str);
                return;
            }

            if (openN < n) {
                dfs(openN + 1, closedN, str + "(");
            }

            if (closedN < openN) {
                dfs(openN, closedN + 1, str + ")");
            }
        };

        dfs(0, 0, "");

        return res;
    }
}
