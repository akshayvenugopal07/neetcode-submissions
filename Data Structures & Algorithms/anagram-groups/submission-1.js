class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let resultArray = [];
        let seenMap = new Map();
        for (let i = 0; i < strs.length; i++) {
            let string = strs[i];
            let sortedStr = string.split('').sort().join();
            if (seenMap.has(sortedStr)) {
                let result = seenMap.get(sortedStr);
                result.push(string)
                seenMap.set(sortedStr, result)
            } else {
                seenMap.set(sortedStr, [string])
            }
        }
        seenMap.forEach((value, key) => {
            resultArray.push(value)
        });
        return resultArray;
    }
}
