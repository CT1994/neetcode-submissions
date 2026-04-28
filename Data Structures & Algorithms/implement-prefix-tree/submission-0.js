class TrieNode {
    constructor() {
        this.word = false;
        this.children = new Map();
    }
}

class PrefixTree {
    constructor() {
        this.root = new TrieNode();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let cur = this.root;

        for (const c of word) {
            if (!cur.children.has(c)) {
                cur.children.set(c, new TrieNode());
            }

            cur = cur.children.get(c)
        }

        cur.word = true
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let cur = this.root;

        for (const c of word) {
            if (!cur.children.has(c)) {
                return false
            }

            cur = cur.children.get(c)
        }

        return cur.word
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let cur = this.root;

        for (const c of prefix) {
            if (!cur.children.has(c)) {
                return false
            }

            cur = cur.children.get(c)
        }

        return true
    }
}
