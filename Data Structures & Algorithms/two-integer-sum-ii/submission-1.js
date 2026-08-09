class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let leftPointer = 0;
        let rightPointer = numbers.length - 1;

        for (let i = 0; i < numbers.length; i++) {

            if (numbers[leftPointer] + numbers[rightPointer] == target) {
                return [leftPointer + 1, rightPointer + 1];
            }
            if (numbers[leftPointer] + numbers[rightPointer] > target) {
                rightPointer--;
            }
            if (numbers[leftPointer] + numbers[rightPointer] < target) {
                leftPointer++;
            }
        }

        return null;
    }
}
