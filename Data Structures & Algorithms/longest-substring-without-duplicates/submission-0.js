class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let longestString = 0;
        let charMap = new Map();
        let start = 0;

        for (let i = 0; i < s.length; i++) {
            const c = s[i];
            if (charMap.has(c) && charMap.get(c) >= start) {
                // duplicate is inside current window — shrink from the left
                start = charMap.get(c) + 1;
            }
            charMap.set(c, i);
            longestString = Math.max(longestString, i - start + 1);
        }

        return longestString;
    }
}