class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const n = nums.length;
        const resultArray = new Array(n).fill(1);

        // Pass 1: fill resultArray[i] with the product of everything BEFORE i
        let prefix = 1;
        for (let i = 0; i < n; i++) {
            resultArray[i] = prefix;
            prefix *= nums[i];
        }

        // Pass 2: multiply resultArray[i] by the product of everything AFTER i
        let suffix = 1;
        for (let i = n - 1; i >= 0; i--) {
            resultArray[i] *= suffix;
            suffix *= nums[i];
        }

        return resultArray;
    }
}