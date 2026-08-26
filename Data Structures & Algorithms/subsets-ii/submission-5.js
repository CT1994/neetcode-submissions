class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        nums.sort((a, b) => a - b);
        const res = [];
        const subset = [];
        const dfs = (i) => {
            if (i >= nums.length) {
                res.push([...subset]);
                return;
            }

            subset.push(nums[i]);
            dfs(i + 1);
            while (i < nums.length && nums[i] === nums[i + 1]) {
                i++;
            }
            subset.pop();
            dfs(i + 1);
        };
        dfs(0);
        return res;
    }
}
