class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        let res = [];
        let subset = [];
        const dfs = (i, sum) => {
            if (sum === target) {
                res.push([...subset]);
                return;
            }

            if (sum > target || i === nums.length) return;

            subset.push(nums[i]);
            dfs(i, sum + nums[i]);
            subset.pop();
            dfs(i + 1, sum);
        };

        dfs(0, 0);

        return res;
    }
}
