class Solution {
    /**
 * @param {string[]} strs
 * @return {string[][]}
 */
    groupAnagrams(strs) {
        const map = new Map();

        for (const item of strs) {
            const key = item.split('').sort().join('');
            if (!map.has(key)) {
                map.set(key, []);
            }
            map.get(key).push(item);
        }

        return Array.from(map.values());
    }
}
