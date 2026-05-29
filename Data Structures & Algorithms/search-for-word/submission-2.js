class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        const ROWS = board.length;
        const COLS = board[0].length;
        const len = word.length;
        const totalCells = ROWS * COLS;

        if (len > totalCells) return false;

        // 1. Convert the word into a 1D Uint8Array of character codes
        const wordNums = new Uint8Array(len);
        for (let i = 0; i < len; i++) {
            wordNums[i] = word.charCodeAt(i);
        }

        // 2. Flatten the 2D board into a 1D Uint16Array
        const flatBoard = new Uint16Array(totalCells);
        const boardCounts = {};

        let idx = 0;
        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                const code = board[r][c].charCodeAt(0);
                flatBoard[idx++] = code;
                boardCounts[code] = (boardCounts[code] || 0) + 1;
            }
        }

        // 3. Frequency Pruning
        const wordCounts = {};
        for (let i = 0; i < len; i++) {
            const code = wordNums[i];
            wordCounts[code] = (wordCounts[code] || 0) + 1;
            if (!boardCounts[code] || wordCounts[code] > boardCounts[code]) {
                return false;
            }
        }

        // 4. Reverse optimization (Rarer start character)
        let targetWord = wordNums;
        if ((boardCounts[wordNums[0]] || 0) > (boardCounts[wordNums[len - 1]] || 0)) {
            targetWord = wordNums.slice().reverse();
        }

        const firstCharNum = targetWord[0];

        // 5. DFS using 1D index mapping
        const dfs = (r, c, i) => {
            if (i === len) return true;
            if (r < 0 || c < 0 || r === ROWS || c === COLS) return false;

            // Calculate 1D index: (r * COLS) + c
            const currentIdx = r * COLS + c;

            if (flatBoard[currentIdx] !== targetWord[i]) {
                return false;
            }

            // Backtrack using 0
            const temp = flatBoard[currentIdx];
            flatBoard[currentIdx] = 0;

            // Explore 4 neighbors
            const found =
                dfs(r + 1, c, i + 1) ||
                dfs(r - 1, c, i + 1) ||
                dfs(r, c + 1, i + 1) ||
                dfs(r, c - 1, i + 1);

            flatBoard[currentIdx] = temp;
            return found;
        };

        // 6. 1D Loop Execution
        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                // Check via the flat array pointer before executing DFS
                if (flatBoard[r * COLS + c] === firstCharNum && dfs(r, c, 0)) {
                    return true;
                }
            }
        }

        return false;
    }
}
