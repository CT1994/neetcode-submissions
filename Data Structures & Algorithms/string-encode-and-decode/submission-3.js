class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encoded = "";

        for (const str of strs) {
            encoded += str.length;
            encoded += '#';
            encoded += str;
        }

        return encoded;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const decoded = [];
        let i = 0;

        while (i < str.length) {
            let length = "";

            while (str[i] !== "#") {
                length += str[i];
                i++;
            }

            i++
            decoded.push(str.substring(i, i + parseInt(length, 10)));

            i += parseInt(length, 10);
        }

        return decoded;
    }
}
