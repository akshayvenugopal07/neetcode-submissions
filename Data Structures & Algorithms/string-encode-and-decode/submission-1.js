class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encodedString = '';
        strs.forEach((str) => {
            encodedString += `${str.length}#${str}`;
        });
        return encodedString;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const result = [];
        let i = 0;

        while (i < str.length) {
            // find the '#' that marks the end of the length prefix
            let j = i;
            while (str[j] !== '#') {
                j++;
            }

            const length = parseInt(str.slice(i, j), 10);
            const wordStart = j + 1;
            const wordEnd = wordStart + length;

            result.push(str.slice(wordStart, wordEnd));

            i = wordEnd; // jump straight to the next length prefix
        }

        return result;
    }
}
