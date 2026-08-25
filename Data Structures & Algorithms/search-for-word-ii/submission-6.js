class TrieNode {
    constructor() {
        this.children = {};
        this.isWord = false;
    }

    addWord(word) {
        let cur = this;

        for (const c of word) {
            if (!cur.children[c]) cur.children[c] = new TrieNode();
            cur = cur.children[c];
        }

        cur.isWord = true;
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
            root.addWord(word);
        }

        const rows = board.length;
        const cols = board[0].length;
        const res = new Set();
        const dfs = (r, c, word, node) => {
            if (r < 0 || c < 0 || r === rows || c === cols || !node.children[board[r][c]]) {
                return;
            }

            const char = board[r][c];
            word += char;
            node = node.children[char];
            if (node.isWord) {
                res.add(word);
            }

            board[r][c] = "";
            dfs(r + 1, c, word, node);
            dfs(r, c + 1, word, node);
            dfs(r - 1, c, word, node);
            dfs(r, c - 1, word, node);
            board[r][c] = char;
        };

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                dfs(r, c, "", root);
            }
        }

        return [...res];
    }
}
