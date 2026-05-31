class TrieNode {
    constructor() {
        this.children = new Map();
        this.word = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(str) {
        let cur = this.root;
        for (const c of str) {
            if (!cur.children.has(c)) {
                cur.children.set(c, new TrieNode());
            }

            cur = cur.children.get(c);
        }

        cur.word = true;
    }

    search(s, i, j) {
        let cur = this.root;

        for (let idx = i; idx <= j; idx++) {
            if (!cur.children.has(s[idx])) {
                return false;
            }
            cur = cur.children.get(s[idx]);
        }

        return cur.word;
    }
}

class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s, wordDict) {
        const trie = new Trie();
        for (const word of wordDict) {
            trie.insert(word);
        }

        const dp = new Array(s.length + 1).fill(false);
        dp[s.length] = true;

        let maxLen = 0;
        for (let w of wordDict) {
            maxLen = Math.max(maxLen, w.length);
        }

        for (let i = s.length - 1; i >= 0; i--) {
            for (let j = i; j < Math.min(s.length, i + maxLen); j++) {
                if (trie.search(s, i, j)) {
                    dp[i] = dp[j + 1];
                    if (dp[i]) break;
                }
            }
        }

        return dp[0];
    }
}
