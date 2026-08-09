class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let numMap = new Map();
        let resultArray = [];

        nums.forEach((num, index) => {
            if (numMap.has(target - num)) {
                resultArray.push(numMap.get(target - num))
                resultArray.push(index);
            }
            numMap.set(num, index)
        })

        return resultArray;
    }
}
