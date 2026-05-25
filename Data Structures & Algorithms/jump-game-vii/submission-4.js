class Solution {
    /**
     * @param {string} s
     * @param {number} minJump
     * @param {number} maxJump
     * @return {boolean}
     */
    canReach(s, minJump, maxJump) {
        const queue = [];
        const visit = new Set();
        queue.push(0);

        while (queue.length > 0) {
            const qLength = queue.length;
            for (let i = 0; i < qLength; i++) {
                const j = queue.pop();
                if (s[j] === "1") {
                    continue;
                }

                if (j === s.length - 1) {
                    return true;
                }

                for (let k = j + minJump; k <= Math.min(s.length - 1, j + maxJump); k++) {
                    if (!visit.has(k)) {
                        queue.push(k);
                        visit.add(k);
                    }
                }
            }
        }

        return false;
    }
}
