class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const res = [];
        const dfs = (i, subset, sum) => {
            if (sum > target || i >= nums.length) return;
            if (sum === target) {
                res.push([...subset]);
                return;
            }
            subset.push(nums[i])
            dfs(i, subset, sum + nums[i])
            subset.pop();
            dfs(i + 1, subset, sum);
        }
        dfs(0, [], 0);
        return res;
    }
}
