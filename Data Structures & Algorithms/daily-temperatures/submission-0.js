class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let resultArray = [];
        for (let i = 0; i < temperatures.length; i++) {
            resultArray.push(0);
            for (let j = i + 1; j < temperatures.length; j++) {
                if (temperatures[j] > temperatures[i]) {
                    resultArray.pop();
                    resultArray.push(j - i);
                    break;
                }
            }
        }
        return resultArray;
    }
}
