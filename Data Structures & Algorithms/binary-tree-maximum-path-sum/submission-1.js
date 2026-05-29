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
     * @return {number}
     */
    maxPathSum(root) {
        let max = -Infinity;
        dfs(root);

        return max;

        function dfs(node) {
            if (!node) return 0;

            let left = Math.max(0, dfs(node.left));
            let right = Math.max(0, dfs(node.right));

            let currentMaxPath = node.val + left + right;
            max = Math.max(max, currentMaxPath);

            return node.val + Math.max(left, right);
        }
    }
}
