class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    isHappy(n) {
        let seen = new Map();
        return this.checkIfOne(n, seen);
    }

    checkIfOne(n, seen) {
        let sum = 0
        const digits = String(n).split('').map(Number);
        digits.forEach((digit) => {
            sum = (sum + (digit * digit));
        });

        if (sum === 1) {
            return true;
        } else if (!seen.has(sum)) {
            seen.set(sum, sum)
            return this.checkIfOne(sum, seen);
        } else {
            return false;
        }
    }
}
