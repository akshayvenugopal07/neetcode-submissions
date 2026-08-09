class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let product = 1;
        let zeroCount = 0; // NEW: track how many zeros are in nums

        nums.forEach((num) => {
            if (num !== 0) {
                product = product * num;
            } else {
                zeroCount++; // NEW
            }
        });

        let resultArray = [];
        nums.forEach((num) => {
            if (zeroCount > 1) {
                // NEW: two or more zeros -> every output is 0, no exceptions
                resultArray.push(0);
            } else if (zeroCount === 1) {
                // NEW: exactly one zero -> only the zero's own position
                // gets the product of everything else; all others are 0
                resultArray.push(num === 0 ? product : 0);
            } else {
                // original case: no zeros at all, division is safe everywhere
                resultArray.push(product / num);
            }
        });

        return resultArray;
    }
}