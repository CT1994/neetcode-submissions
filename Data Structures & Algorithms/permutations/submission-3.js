class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        let perms = [[]];
        for (const n of nums) {
            const nextPerms = [];
            for (const p of perms) {
                for (let i = 0; i < p.length + 1; i++) {
                    nextPerms.push(p.toSpliced(i, 0, n));
                }
            }
            perms = nextPerms;
        }
        return perms;
    }
}
