class Solution {
    /**
     * @param {string[]} words
     * @return {boolean}
     */
    validWordSquare(words) {
        const ROWS = words.length;
        const COLS = words[0].length;

        for (let r = 0; r < ROWS; r++) {
            const word = words[r];
            for (let c = 0; c < word.length; c++) {
                if (!words[c]) {
                    return false
                }
                if (word[c] !== words[c][r]) {
                    return false
                }
            }
        }

        return true
    }
}
