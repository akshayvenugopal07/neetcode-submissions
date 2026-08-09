class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(height) {
        // Edge case check
        if (height.length <= 1) return 0;

        // Initialize pointers
        let left = 0;
        let right = height.length - 1;
        let maxWater = 0;

        while (left < right) {
            // Calculate width between pointers
            let width = right - left;
            // Height is limited by the smaller value
            let containerHeight = Math.min(height[left], height[right]);
            // Calculate area
            let area = width * containerHeight;
            // Update maxWater if current area is larger
            maxWater = Math.max(maxWater, area);

            // Move pointer with smaller height
            if (height[left] < height[right]) {
                left++;
            } else {
                right--;
            }
        }

        return maxWater;
    }
}
