class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let freqMap = new Map();
        nums.forEach((item) => {
            freqMap.set(item, (freqMap.get(item) || 0) + 1);
        });

        let array = [];
        freqMap.forEach((count, num) => {
            array.push([num, count]);
        });

        array.sort((a, b) => b[1] - a[1]); // sort by count, index 1

        let resultArray = [];
        for (let index = 0; index < k; index++) {
            const element = array[index][0];
            resultArray.push(element)
        }

        return resultArray;
    }
}


