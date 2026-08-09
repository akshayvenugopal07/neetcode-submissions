class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        const hoursNeeded = (k) => {
            let hours = 0;
            for (const pile of piles) {
                hours += Math.ceil(pile / k);
            }
            return hours;
        };

        let low = 1;
        let high = Math.max(...piles);

        while (low < high) {
            const mid = Math.floor((low + high) / 2);
            if (hoursNeeded(mid) <= h) {
                high = mid;
            } else {
                low = mid + 1;
            }
        }

        return low;
    }
}