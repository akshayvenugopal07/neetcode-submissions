class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let rotatedCount = 0;
        for (let i = 0; i < nums.length; i++) {
            let num = nums[i];
            let prevNum = nums[i - 1];
            if (num < prevNum) {
                break;
            }
            rotatedCount++;
        }
        if (rotatedCount === nums.length) {
            rotatedCount = 0;
        }
        return nums[rotatedCount];
    }
}
