class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const sorted = [...nums].sort((a, b) => a - b);
        const result = [];

        for (let i = 0; i < sorted.length - 2; i++) {
            // Skip duplicate values for the first number
            if (i > 0 && sorted[i] === sorted[i - 1]) continue;

            // Small optimization: if smallest possible sum > 0, stop
            if (sorted[i] > 0) break;

            let left = i + 1;
            let right = sorted.length - 1;

            while (left < right) {
                const sum = sorted[i] + sorted[left] + sorted[right];

                if (sum === 0) {
                    result.push([sorted[i], sorted[left], sorted[right]]);

                    // Skip duplicates for second and third numbers
                    while (left < right && sorted[left] === sorted[left + 1]) left++;
                    while (left < right && sorted[right] === sorted[right - 1]) right--;

                    left++;
                    right--;
                } else if (sum < 0) {
                    left++; // need a bigger sum
                } else {
                    right--; // need a smaller sum
                }
            }
        }

        return result;
    }
}