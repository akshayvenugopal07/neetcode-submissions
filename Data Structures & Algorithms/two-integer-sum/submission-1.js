class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let seenMap = new Map();
        for (let i = 0; i < nums.length; i++) {
            let num = nums[i];
            if (seenMap.has(target - num)) {
                let pos = seenMap.get(target - num)
                return [i, pos];
            }
            seenMap.set(num, i);
        }
        return [];
    }
}
