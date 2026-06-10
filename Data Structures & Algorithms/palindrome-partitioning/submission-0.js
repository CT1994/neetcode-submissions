class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s) {
        const res = [];
        const part = [];

        const dfs = (i) => {
            if (i === s.length) {
                res.push([...part]);
                return;
            }

            for (let j = i; j < s.length; j++) {
                if (this.isPalindrome(s, i, j)) {
                    part.push(s.substring(i, j + 1));
                    dfs(j + 1);
                    part.pop();
                }
            }
        }

        dfs(0)

        return res
    }

    isPalindrome(s, l, r) {
        while (l < r) {
            if (s[l] !== s[r]) {
                return false
            }
            l++;
            r--;
        }

        return true
    }
}
