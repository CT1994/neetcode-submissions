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
        return this.searchHelper(word, this.root, 0);
    }

    searchHelper(word, root, idx) {
        let cur = root;
        for (let i = idx; i < word.length; i++) {
            const c = word[i];
            if (c === ".") {
                for (const key in cur.children) {
                    if (this.searchHelper(word, cur.children[key], i + 1)) {
                        return true;
                    }
                }
                return false;
            }

            if (!cur.children[c]) return false;
            cur = cur.children[c];
        }

        return cur.isWord;
    }
}
