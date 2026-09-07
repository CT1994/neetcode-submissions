class Solution {
    /**
     * @param {string[]} words
     * @returns {string}
     */
    foreignDictionary(words) {
        const edges = [];

        for (let i = 1; i < words.length; i++) {
            const word1 = words[i - 1];
            const word2 = words[i];

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

        const adjList = [];
        for (const word of words) {
            for (const c of word) {
                adjList[c] = [];
            }
        }

        for (let [src, dst] of edges) {
            adjList[dst].push(src);
        }

        const topSort = [];
        const visit = new Set();
        const path = new Set();
        const dfs = (i) => {
            if (path.has(i)) return false;
            if (visit.has(i)) return true;
            path.add(i);
            for (const n of adjList[i]) {
                if (!dfs(n)) return false;
            }
            path.delete(i);
            visit.add(i);
            topSort.push(i);
            return true;
        };

        for (const word of words) {
            for (const c of word) {
                if (!dfs(c)) return "";
            }
        }

        return topSort.join("");
    }
}
