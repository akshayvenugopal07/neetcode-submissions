class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const cleanedString = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
        let isValidPalindrome = true;
        for (let i = 0; i < cleanedString.length / 2; i++) {
            if (cleanedString[i] !== cleanedString[cleanedString.length - i - 1]) {
                isValidPalindrome = false;
            }
        }
        return isValidPalindrome;
    }
}
