class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const res = [];
        const subset = [];
        const dfs = (i, sum) => {
            if (i === nums.length || sum > target) {
                return;
            }
            if (sum === target) {
                res.push([...subset]);
                return;
            }

            subset.push(nums[i]);
            dfs(i, sum + nums[i]);
            subset.pop();
            dfs(i + 1, sum);
        };
        dfs(0, 0);
        return res;
    }
}
