class Solution {
    /**
     * @param {number} n
     * @return {string[][]}
     */
    solveNQueens(n) {
        const res = [];
        const col = new Set();
        const posDiag = new Set();
        const negDiag = new Set();
        const board = Array.from({ length: n }, () => new Array(n).fill("."));

        const dfs = (r) => {
            if (r === n) {
                res.push(board.map((row) => row.join("")));
                return;
            }

            for (let c = 0; c < n; c++) {
                if (col.has(c) || posDiag.has(r + c) || negDiag.has(r - c)) {
                    continue;
                }

                col.add(c);
                posDiag.add(r + c);
                negDiag.add(r - c);
                board[r][c] = "Q";
                dfs(r + 1);
                col.delete(c);
                posDiag.delete(r + c);
                negDiag.delete(r - c);
                board[r][c] = ".";
            }
        };

        dfs(0);

        return res;
    }
}
