class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        let strMap = new Map();
        for (let i = 0; i < s1.length; i++) {
            let str = s1[i];
            if (strMap.has(str)) {
                strMap.set(str, strMap.get(str) + 1)
            } else {
                strMap.set(str, 1)
            }
        }

        let subStringPresent = false;
        for (let i = 0; i < s2.length; i++) {
            let str = s2[i];
            let matched = s1.length;
            const deepCloneMap = structuredClone(strMap); 
            if (deepCloneMap.has(str)) {
                let j = i + 1;
                deepCloneMap.set(str, deepCloneMap.get(str) - 1)
                matched--;
                while (j - i < s2.length) {
                    if (deepCloneMap.has(s2[j]) && deepCloneMap.get(s2[j]) !== 0) {
                        deepCloneMap.set(s2[j], deepCloneMap.get(s2[j]) - 1)
                        matched--;
                        j++;
                    } else {
                        break
                    }
                }
                if (matched === 0) {
                    subStringPresent = true;
                }
            }
        }

        return subStringPresent;
    }
}
