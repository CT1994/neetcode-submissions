class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const cars = position.map((p, i) => [p, (target - p) / speed[i]]);
        cars.sort((a, b) => b[0] - a[0]);
        let slowestTime = 0;
        let fleets = 0;
        for (const [_, time] of cars) {
            if (time > slowestTime) {
                slowestTime = time;
                fleets++;
            }
        }
        return fleets;
    }
}
