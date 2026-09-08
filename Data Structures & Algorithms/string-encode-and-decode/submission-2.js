class Solution {
    encode(strs) {
        let encodedString = '';
        strs.forEach((string) => {
            encodedString += `${string.length}#${string}`;
        });
        return encodedString;
    }

    decode(str) {
        const words = [];
        let i = 0;
        while (i < str.length) {
            let j = i;
            while (str[j] !== '#') j++;          // find the delimiter
            const len = parseInt(str.slice(i, j), 10); // parse length as a number
            const start = j + 1;
            words.push(str.slice(start, start + len));
            i = start + len;                      // jump past this word
        }
        return words;
    }
}