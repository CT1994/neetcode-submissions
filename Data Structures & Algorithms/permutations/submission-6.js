class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        let perms = [[]];

        for (const num of nums) {
            const nextPerms = [];
            for (const perm of perms) {
                for (let i = 0; i <= perm.length; i++) {
                    nextPerms.push(perm.toSpliced(i, 0, num));
                }
            }
            perms = nextPerms;
        }

        return perms;
    }
}
