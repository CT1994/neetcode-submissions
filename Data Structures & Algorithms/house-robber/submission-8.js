class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        let rob1 = 0;
        let rob2 = 0;
        for (const n of nums) {
            const tmp = Math.max(n + rob1, rob2);
            rob1 = rob2;
            rob2 = tmp;
        }
        return rob2;
    }
}
