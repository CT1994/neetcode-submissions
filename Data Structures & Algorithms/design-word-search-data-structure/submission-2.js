class TrieNode {
    constructor() {
        this.word = false;
        this.children = new Map();
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

        cur.word = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        return this.searchHelper(this.root, word);
    }

    searchHelper(root, word) {
        let cur = root;

        for (let i = 0; i < word.length; i++) {
            const c = word[i];
            if (c === ".") {
                const newWord = word.slice(i + 1);
                for (const val of cur.children.values()) {
                    if (this.searchHelper(val, newWord)) {
                        return true;
                    }
                }

                return false;
            } else {
                if (!cur.children.has(c)) {
                    return false;
                }

                cur = cur.children.get(c);
            }
        }

        return cur.word;
    }
}

// when we encounter a . we need to get all children at this position and search all of them
