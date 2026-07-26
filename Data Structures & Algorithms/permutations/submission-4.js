class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        let perms = [[]];

        for (const n of nums) {
            const nextPerms = [];
            for (const perm of perms) {
                for (let i = 0; i < perm.length + 1; i++) {
                    nextPerms.push(perm.toSpliced(i, 0, n));
                }
            }
            perms = nextPerms;
        }

        return perms;
    }
}
