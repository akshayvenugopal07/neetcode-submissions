class Solution {
    isAnagram(s, t) {
        if (s.length !== t.length) return false;

        const counts = new Map();
        for (const ch of s) counts.set(ch, (counts.get(ch) || 0) + 1);
        for (const ch of t) {
            if (!counts.has(ch)) return false;
            counts.set(ch, counts.get(ch) - 1);
            if (counts.get(ch) === 0) counts.delete(ch);
        }
        return counts.size === 0;
    }
}