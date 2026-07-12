class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        let steps = [1, 1];

        for (let i = 0; i < n - 1; i++) {
            let temp = steps[0];
            steps[0] += steps[1];
            steps[1] = temp
        }

        return steps[0]
    }
}
