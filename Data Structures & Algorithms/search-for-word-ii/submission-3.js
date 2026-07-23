class TrieNode {
    constructor() {
        this.children = {};
        this.word = false;
    }
}

class Solution {
    /**
     * @param {character[][]} board
     * @param {string[]} words
     * @return {string[]}
     */
    findWords(board, words) {
        const root = new TrieNode();

        for (const word of words) {
            let cur = root;
            for (const c of word) {
                if (!cur.children[c]) {
                    cur.children[c] = new TrieNode();
                }
                cur = cur.children[c];
            }
            cur.word = true;
        }

        const rows = board.length;
        const cols = board[0].length;
        const res = new Set();
        const visit = new Set();
        const dfs = (r, c, node, word) => {
            if (
                r < 0 ||
                c < 0 ||
                r === rows ||
                c === cols ||
                visit.has(r * cols + c) ||
                !node.children[board[r][c]]
            ) {
                return;
            }

            visit.add(r * cols + c);
            node = node.children[board[r][c]];
            word += board[r][c];
            if (node.word) {
                res.add(word);
            }

            dfs(r + 1, c, node, word);
            dfs(r, c + 1, node, word);
            dfs(r - 1, c, node, word);
            dfs(r, c - 1, node, word);
            visit.delete(r * cols + c);
        };

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                dfs(r, c, root, "");
            }
        }

        return [...res];
    }
}
