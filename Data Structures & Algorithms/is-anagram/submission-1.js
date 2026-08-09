class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        if (!s || !t) return false;

        if (s.length !== t.length) return false;

        let sortedS = s.split('').sort().join('');
        let sortedT = t.split('').sort().join('');

        let isValidAnagram = true;

        for (let i = 0; i < sortedS.length; i++) {
            if (sortedS[i] !== sortedT[i]) {
                isValidAnagram = false;
            }
        }

        return isValidAnagram;
    }
}
