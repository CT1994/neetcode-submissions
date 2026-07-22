class PrefixNode {
    constructor() {
        this.children = {};
        this.isWord = false;
    }
}

class PrefixTree {
    constructor() {
        this.root = new PrefixNode();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let cur = this.root;
        for (const c of word) {
            if (!cur.children[c]) {
                cur.children[c] = new PrefixNode();
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
        let cur = this.root;
        for (const c of word) {
            if (!cur.children[c]) return false;
            cur = cur.children[c];
        }
        return cur.isWord;
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
