class Trie {
    constructor() {
        this.children = {};
        this.word = false;
    }
}

class PrefixTree {
    constructor() {
        this.root = new Trie();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let cur = this.root;

        for (const c of word) {
            if (!cur.children[c]) cur.children[c] = new Trie();
            cur = cur.children[c];
        }

        cur.word = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let cur = this.root;

        for (const c of word) {
            if (!cur.children[c]) return false;
            cur = cur.children[c];
        }
        return cur.word;
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let cur = this.root;

        for (const c of prefix) {
            if (!cur.children[c]) return false;
            cur = cur.children[c];
        }

        return true;
    }
}
