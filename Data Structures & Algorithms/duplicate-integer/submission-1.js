class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {

        if (nums.length === 0) return false;

        let duplicateMap = new Map();
        let hasDuplicates = false;

        nums.forEach((item) => {
            if (duplicateMap.has(item)) {
                hasDuplicates = true;
            }
            duplicateMap.set(item, item);
        })

        return hasDuplicates;
    }
}
