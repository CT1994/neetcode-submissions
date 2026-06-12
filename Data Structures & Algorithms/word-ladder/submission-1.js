class Solution {
    /**
     * @param {string} beginWord
     * @param {string} endWord
     * @param {string[]} wordList
     * @return {number}
     */
    ladderLength(beginWord, endWord, wordList) {
        const words = new Set(wordList);
        if (!words.has(endWord)) return 0;

        let count = 1;
        const wordLength = beginWord.length;
        const q = new Deque();
        q.pushBack(beginWord);

        while (q.size()) {
            const qLength = q.size();
            for (let i = 0; i < qLength; i++) {
                const cur = q.popFront();
                if (cur === endWord) {
                    return count;
                }

                words.forEach((word) => {
                    let difference = 0;
                    let l = 0;
                    while (l < wordLength) {
                        if (cur[l] !== word[l]) {
                            difference++;
                        }

                        if (difference > 1) {
                            break;
                        }
                        l++;
                    }

                    if (difference === 1) {
                        q.pushBack(word);
                        words.delete(word);
                    }
                });
            }
            count++;
        }

        return 0;
    }
}
