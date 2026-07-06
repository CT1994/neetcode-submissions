class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let l = 0;
        let r = Math.max(...piles);
        let res = r;

        while (l <= r) {
            const m = l + Math.floor((r - l) / 2);
            let totalTime = 0;
            for (let i = 0; i < piles.length; i++) {
                totalTime += Math.ceil(piles[i] / m);
            }

            if (totalTime <= h) {
                res = m;
                r = m - 1;
            } else {
                l = m + 1;
            }
        }

        return res;
    }
}
