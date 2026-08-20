class Solution {
    /**
     * @param {string[]} words
     * @returns {string}
     */
    foreignDictionary(words) {
        const adjList = [];
        for (const word of words) {
            for (const c of word) {
                if (!adjList[c]) adjList[c] = [];
            }
        }

        for (let i = 0; i < words.length - 1; i++) {
            const a = words[i];
            const b = words[i + 1];

            if (a.length > b.length && a.startsWith(b)) {
                return "";
            }

            for (let i = 0; i < Math.min(a.length, b.length); i++) {
                if (a[i] !== b[i]) {
                    adjList[a[i]].push(b[i]);
                    break;
                }
            }
        }

        const topSort = [];
        const visit = new Set();
        const path = new Set();
        const dfs = (i) => {
            if (path.has(i)) return false;
            if (visit.has(i)) return true;
            path.add(i);
            for (const c of adjList[i]) {
                if (!dfs(c)) return false;
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

        topSort.reverse();
        return topSort.join("");
    }
}
