class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (!nums || nums.length === 0) return 0;

        // O(n) space to store unique numbers
        const numSet = new Set(nums);
        let longestSequence = 0;

        for (const num of numSet) {
            // Check if 'num' is the START of a sequence.
            // If num - 1 exists, 'num' is NOT the start, so we skip it.
            if (!numSet.has(num - 1)) {
                let currentNum = num;
                let currentStreak = 1;

                // Expand the sequence forward
                while (numSet.has(currentNum + 1)) {
                    currentNum++;
                    currentStreak++;
                }

                longestSequence = Math.max(longestSequence, currentStreak);
            }
        }
        return longestSequence;
    }
}
