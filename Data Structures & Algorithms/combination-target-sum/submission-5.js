class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const res = [];
        const curSet = [];
        const dfs = (i, total) => {
            if (total === target) {
                res.push([...curSet]);
                return;
            }
            if (i === nums.length || total > target) return;

            curSet.push(nums[i]);
            dfs(i, total + nums[i]);
            curSet.pop();
            dfs(i + 1, total);
        };
        dfs(0, 0);
        return res;
    }
}
