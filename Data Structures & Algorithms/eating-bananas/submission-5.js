class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        // 1. find the initial search range
        let l = 1;
        let r = Math.max(...piles);

        let res = r;
        // 2. search between the range
        while (l <= r) {
            const m = l + Math.floor((r - l) / 2);
            let totalTime = 0;
            for (const pile of piles) {
                totalTime += Math.ceil(pile/m)
            }
            if (totalTime <= h) {
                r = m - 1;
                res = m;
            }
            else {
                l = m + 1
            }
        }

        return res;
    }
}
