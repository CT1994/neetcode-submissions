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

        for (let i = 1; i < words.length; i++) {
            const word1 = words[i - 1];
            const word2 = words[i];

            if (word1.length > word2.length && word1.startsWith(word2)) {
                return "";
            }

            for (let j = 0; j < Math.min(word1.length, word2.length); j++) {
                if (word1[j] !== word2[j]) {
                    edges.push([word1[j], word2[j]]);
                    break;
                }
            }
        }

        for (const [src, dst] of edges) {
            adjList[dst].add(src);
        }

        const res = [];
        const visit = new Set();
        const path = new Set();
        const dfs = (i) => {
            if (path.has(i)) return false;
            if (visit.has(i)) return true;
            path.add(i);
            for (let n of adjList[i]) {
                if (!dfs(n)) return false;
            }
            path.delete(i);
            visit.add(i);
            res.push(i);
            return true;
        };

        for (const key in adjList) {
            if (!dfs(key)) return "";
        }

        return res.join("");
    }
}
