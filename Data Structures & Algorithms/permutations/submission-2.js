class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        const dfs = (i) => {
            if (i === nums.length) return [[]];

            const resPerms = [];
            const perms = dfs(i + 1);
            for (const p of perms) {
                for (let j = 0; j < p.length + 1; j++) {
                    resPerms.push(p.toSpliced(j, 0, nums[i]));
                }
            }
            return resPerms;
        };
        return dfs(0);
    }
}
