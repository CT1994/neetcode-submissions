class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const cars = position.map((pos, i) => [pos, (target - pos) / speed[i]]);

        cars.sort((a, b) => b[0] - a[0]);

        let fleets = 0;
        let slowestTime = 0;

        for (const [_, time] of cars) {
            if (time > slowestTime) {
                fleets++;
                slowestTime = time;
            }
        }

        return fleets;
    }
}
