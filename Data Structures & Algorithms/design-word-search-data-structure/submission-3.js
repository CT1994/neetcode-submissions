class TrieNode {
    constructor() {
        this.children = new Map();
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
            if (!cur.children.has(c)) {
                cur.children.set(c, new TrieNode());
            }
            cur = cur.children.get(c);
        }
        cur.isWord = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        return this.dfs(word, 0, this.root)
    }

    dfs(word, j, root) {
        let cur = root;

        for (let i = j; i < word.length; i++) {
            const c = word[i];
            if (c === ".") {
                for (const child of cur.children.values()) {
                    if (child !== null && this.dfs(word, i + 1, child)) {
                        return true;
                    }
                }
                return false;
            } else {
                if (!cur.children.has(word[i])) {
                    return false;
                }
                cur = cur.children.get(word[i]);
            }
        }
        return cur.isWord;
    }
}
