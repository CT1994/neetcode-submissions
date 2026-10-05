class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rows = Array.from({ length: 9 }, () => new Set());
        const cols = Array.from({ length: 9 }, () => new Set());
        const squares = Array.from({ length: 9 }, () => new Set());

        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                if (board[r][c] === ".") continue;

                const squareIndex = Math.floor(r / 3) * 3 + Math.floor(c / 3);
                if (
                    rows[r].has(board[r][c]) ||
                    cols[c].has(board[r][c]) ||
                    squares[squareIndex].has(board[r][c])
                ) {
                    return false;
                }

                rows[r].add(board[r][c]);
                cols[c].add(board[r][c]);
                squares[squareIndex].add(board[r][c]);
            }
        }

        return true;
    }
}
