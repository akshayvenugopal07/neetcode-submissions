class Solution {
    topKFrequent(nums, k) {
        const seen = new Map();
        for (const element of nums) {
            seen.set(element, (seen.get(element) || 0) + 1);
        }

        // sort entries by frequency (descending), take top k
        return [...seen.entries()]
            .sort((a, b) => b[1] - a[1])
            .slice(0, k)
            .map(entry => entry[0]);
    }
}