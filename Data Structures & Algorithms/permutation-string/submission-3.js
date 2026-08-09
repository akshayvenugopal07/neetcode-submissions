class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        const n = s1.length, m = s2.length;
        if (n > m) return false;

        const a = 'a'.charCodeAt(0);
        const need = new Array(26).fill(0);
        const window = new Array(26).fill(0);

        // Build initial counts: s1, and the first window of s2
        for (let i = 0; i < n; i++) {
            need[s1.charCodeAt(i) - a]++;
            window[s2.charCodeAt(i) - a]++;
        }

        if (arraysEqual(need, window)) return true;

        for (let i = n; i < m; i++) {
            window[s2.charCodeAt(i) - a]++;           // add new char entering window
            window[s2.charCodeAt(i - n) - a]--;        // remove char leaving window
            if (arraysEqual(need, window)) return true;
        }

        return false;
    }
}

function arraysEqual(a, b) {
    for (let i = 0; i < 26; i++) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}