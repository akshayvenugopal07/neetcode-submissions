class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(string, count) {
        let longestSubString = 0;

        for (let i = 0; i < string.length; i++) {
            let freq = {};
            let maxFreq = 0;
            let j = i;

            while (j < string.length) {
                let ch = string[j];
                freq[ch] = (freq[ch] || 0) + 1;
                maxFreq = Math.max(maxFreq, freq[ch]);

                let windowLength = j - i + 1;
                let replacementsNeeded = windowLength - maxFreq;

                if (replacementsNeeded > count) {
                    break;
                }

                longestSubString = Math.max(longestSubString, windowLength);
                j++;
            }
        }

        return longestSubString;
    }
}