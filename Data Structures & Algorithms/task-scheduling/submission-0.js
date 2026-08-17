class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks, n) {
        const freq = new Array(26).fill(0);
        for (const t of tasks) {
            freq[t.charCodeAt(0) - 65]++;
        }

        const maxFreq = Math.max(...freq);
        let maxCount = 0;
        for (const f of freq) {
            if (f === maxFreq) maxCount++;
        }

        const frameSize = (maxFreq - 1) * (n + 1) + maxCount;
        return Math.max(tasks.length, frameSize);
    }
}