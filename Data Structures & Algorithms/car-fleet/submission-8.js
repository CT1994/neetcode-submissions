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
        console.log(cars);
        let fleets = 0;
        let l = 0;
        while (l < cars.length) {
            let r = l;
            while (r < cars.length && cars[l][1] >= cars[r][1]) {
                r++;
            }
            fleets++;
            l = r;
        }

        return fleets;
    }
}
