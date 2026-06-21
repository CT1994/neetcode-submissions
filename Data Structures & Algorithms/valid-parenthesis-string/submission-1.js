class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    checkValidString(s) {
        const cache = Array.from({ length: s.length + 1 }, () => Array(s.length + 1).fill(null));
        const dfs = (i, open) => {
            if (open < 0) return false;
            if (i === s.length) return open === 0;

            if (cache[i][open] !== null) return cache[i][open]
            
            let result;
            if (s[i] === "(") {
                result = dfs(i + 1, open + 1);
            } else if (s[i] === ")") {
                result = dfs(i + 1, open - 1);
            } else {
                result = dfs(i + 1, open) || dfs(i + 1, open + 1) || dfs(i + 1, open - 1);
            }

            return cache[i][open] = result;
        };

        return dfs(0, 0);
    }
}
