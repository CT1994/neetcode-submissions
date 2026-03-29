class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encoded = "";

        for (const str of strs) {
            encoded += str.length;
            encoded += "#";
            encoded += str
        }

        return encoded;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const result = [];
        let i = 0

        while (i < str.length) {
            let wordLength = "";

            while (str[i] !== "#") {
                wordLength += str[i];
                i++;
            }

            i++;

            let len = parseInt(wordLength);
            result.push(str.substring(i, i + len))
            
            i += len;
        }

        return result;
    }
}
