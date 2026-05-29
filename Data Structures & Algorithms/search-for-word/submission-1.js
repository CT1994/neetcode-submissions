class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        const ROWS = board.length;
        const COLS = board[0].length;

        const dfs = (r, c, i) => {
            if (i === word.length) {
                return true;
            }

            if (r < 0 || c < 0 || r === ROWS || c === COLS || board[r][c] !== word[i]) {
                return false;
            }

            const tmp = board[r][c];
            board[r][c] = ""
            if (
                dfs(r + 1, c, i + 1) ||
                dfs(r, c + 1, i + 1) ||
                dfs(r - 1, c, i + 1) ||
                dfs(r, c - 1, i + 1)
            ) {
                return true;
            }
            board[r][c] = tmp;

            return false;
        };

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (board[r][c] === word[0] && dfs(r, c, 0)) {
                    return true;
                }
            }
        }

        return false;
    }
}
