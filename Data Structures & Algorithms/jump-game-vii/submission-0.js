class Solution {
    /**
     * @param {string} s
     * @param {number} minJump
     * @param {number} maxJump
     * @return {boolean}
     */
    canReach(s, minJump, maxJump) {
        let l = 0;
        let r = 0;

        while (r < s.length - 1) {
            let pos = []
            for (let i = l + minJump; i <= Math.min(l + maxJump, s.length - 1); i++) {
                if (s[i] === "0") {
                    pos.push(i)
                }
            }

            if (pos.length === 0) {
                return false;
            }

            l = pos[0];
            r = pos[pos.length - 1];
        }

        return r === s.length - 1;
    }
}
