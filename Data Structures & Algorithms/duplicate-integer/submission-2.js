class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let seenMap = new Map();
        for (let i = 0; i < nums.length; i++) {
            let num = nums[i];
            if (seenMap.has(num)) {
                return true;
            }
            seenMap.set(num, num);
        }
        return false;
    }
}
