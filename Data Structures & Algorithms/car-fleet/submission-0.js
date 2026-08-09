class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let cars = position.map((pos, i) => [pos, speed[i]]);
        cars.sort((a, b) => b[0] - a[0]);

        let fleets = 0;
        let currentFleetTime = 0; // time it takes the fleet ahead to finish

        for (const [pos, spd] of cars) {
            const time = (target - pos) / spd;

            // If this car takes longer than the fleet ahead, it can never
            // catch up -> it becomes its own new fleet (the new "leader")
            if (time > currentFleetTime) {
                fleets++;
                currentFleetTime = time;
            }
            // else: it catches up to the fleet ahead before/at the target,
            // so it merges into that fleet (no new fleet counted)
        }

        return fleets;
    }
}
