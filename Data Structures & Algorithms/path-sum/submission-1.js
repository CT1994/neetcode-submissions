/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    /**
     * @param {TreeNode} root
     * @param {number} targetSum
     * @return {boolean}
     */
    hasPathSum(root, targetSum) {
        const dfs = (root, sum) => {
            if (!root) return false;

            sum += root.val;
            if (!root.left && !root.right) return sum === targetSum;
            return dfs(root.left, sum) || dfs(root.right, sum);
        };
        return dfs(root, 0);
    }
}
