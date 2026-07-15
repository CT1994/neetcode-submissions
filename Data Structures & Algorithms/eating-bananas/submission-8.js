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
            for (const t of piles) {
                totalTime += Math.ceil(t / m);
            }

            if (totalTime > h) {
                l = m + 1;
            } else {
                r = m - 1;
                res = m;
            }
        }

        return res;
    }
}
