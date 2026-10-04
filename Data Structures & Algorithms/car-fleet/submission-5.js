class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const n = position.length;
        const fleet = new Array();

        for (let i = 0; i < n; i++) {
            fleet.push([position[i], (target - position[i]) / speed[i]])
        }
        fleet.sort((a, b) => b[0] - a[0]);

        let res = 0;
        let l = 0;
        while (l < n) {
            let r = l
            while (r < n && fleet[l][1] >= fleet[r][1]) {
                r++
            }
            l = r;
            res++
        }
        
        return res;
    }
}

// [4,1,0,7]
// [6,3,1,8]
// [8,5,2,9]
// [10,7,3,10]