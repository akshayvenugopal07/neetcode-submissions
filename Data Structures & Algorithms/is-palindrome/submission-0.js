class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const cleanedString = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
        console.log(cleanedString)
        let isValidPalindrome = true;
        for (let i = 0; i < cleanedString.length / 2; i++) {
            console.log("===========")
            console.log(cleanedString[i])
            console.log(cleanedString[cleanedString.length - i - 1])
            console.log("===========")
            if (cleanedString[i] !== cleanedString[cleanedString.length - i - 1]) {
                isValidPalindrome = false;
            }
        }
        return isValidPalindrome;
    }
}
