class Solution {
    /**
     * @param {string[]} words
     * @returns {string}
     */
    foreignDictionary(words) {
        const adjList = {};
        const edges = [];

        for (const word of words) {
            for (const c of word) {
                if (!adjList[c]) {
                    adjList[c] = new Set();
                }
            }
        }

        for (let i = 0; i < words.length - 1; i++) {
            const word1 = words[i];
            const word2 = words[i + 1];

            if (word1.length > word2.length && word1.startsWith(word2)) {
                return "";
            }

            let j = 0;

            while (j < word1.length && j < word2.length) {
                if (word1[j] !== word2[j]) {
                    edges.push([word1[j], word2[j]]);
                    break;
                }
                j++;
            }
        }

        for (const [src, dst] of edges) {
            adjList[dst].add(src);
        }

        const res = [];
        const visit = new Set();
        const path = new Set();

        const dfs = (src) => {
            if (path.has(src)) return false;
            if (visit.has(src)) return true;
            path.add(src);
            for (const n of adjList[src]) {
                if (!dfs(n)) return false;
            }
            path.delete(src);
            visit.add(src);
            res.push(src);
            return true;
        };

        for (const key in adjList) {
            if (!dfs(key)) return "";
        }

        return res.join("");
    }
}
