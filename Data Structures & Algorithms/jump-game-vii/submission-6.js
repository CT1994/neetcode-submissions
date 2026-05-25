class Solution {
    /**
     * @param {string} s
     * @param {number} minJump
     * @param {number} maxJump
     * @return {boolean}
     */
    canReach(s, minJump, maxJump) {
        const q = new Queue();
        q.push(0);
        let farthest = 0;

        while (!q.isEmpty()) {
            const i = q.pop();
            const start = Math.max(i + minJump, farthest + 1);

            for (let j = start; j < Math.min(i + maxJump + 1, s.length); j++) {
                if (s[j] === '0') {
                    q.push(j);
                    if (j === s.length - 1) {
                        return true;
                    }
                }
            }
            farthest = i + maxJump;
        }

        return false;
    }
}