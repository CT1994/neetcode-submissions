class Solution {
    /**
     * @param {string[]} words
     * @returns {string}
     */
    foreignDictionary(words) {
        const adjList = {};
        for (const word of words) {
            for (const c of word) {
                adjList[c] = [];
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
                    adjList[word1[j]].push(word2[j]);
                    break;
                }
            }
        }

        const topSort = [];
        const path = new Set();
        const visit = new Set();
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

        for (const i of Object.keys(adjList)) {
            if (!dfs(i)) return "";
        }

        return topSort.reverse().join("");
    }
}
