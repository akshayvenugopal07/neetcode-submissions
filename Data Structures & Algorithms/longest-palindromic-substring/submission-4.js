class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(string) {
        if (!string || string.length === 1) {
            return string;
        }

        let longest = "";

        for (let index = 0; index < string.length; index++) {
            const odd = this.expand(string, index, index);
            const even = this.expand(string, index, index + 1);
            const best = odd.length >= even.length ? odd : even;

            if (best.length > longest.length) {
                longest = best;
            }
        }

        return longest;
    }

    // Expands outward from (left, right) and returns the palindrome substring.
    expand(string, left, right) {
        while (left >= 0 && right < string.length && string[left] === string[right]) {
            left--;
            right++;
        }
        // left/right now point one past the valid match on each side
        return string.substring(left + 1, right);
    }
}