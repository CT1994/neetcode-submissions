class TrieNode {
    constructor() {
        this.children = {};
        this.isWord = false;
    }
}

class WordDictionary {
    constructor() {
        this.root = new TrieNode();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        let cur = this.root;
        for (const c of word) {
            if (!cur.children[c]) {
                cur.children[c] = new TrieNode();
            }
            cur = cur.children[c];
        }
        cur.isWord = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        return this.dfs(this.root, word, 0);
    }

    /**
     * @param {TrieNode} root
     * @param {string} word
     * @param {number} i
     */
    dfs(root, word, i) {
        let cur = root;
        for (let j = i; j < word.length; j++) {
            const c = word[j];
            if (c === ".") {
                for (const node of Object.values(cur.children)) {
                    if (this.dfs(node, word, j + 1)) {
                        return true;
                    }
                }

                return false;
            }

            if (!cur.children[c]) {
                return false;
            }

            cur = cur.children[c];
        }
        return cur.isWord;
    }
}
