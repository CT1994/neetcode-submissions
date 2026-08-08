class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permuteUnique(nums) {
        let perms = [[]];

        for (const n of nums) {
            let nextPerms = [];
            for (const perm of perms) {
                for (let i = 0; i <= perm.length; i++) {
                    nextPerms.push(perm.toSpliced(i, 0, n));
                    if (perm[i] === n) break;
                }
            }
            perms = nextPerms;
        }

        return perms;
    }
}
