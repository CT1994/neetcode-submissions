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
        let max = root.val;
        const dfs = (root) => {
            if (!root) return 0;

            const left = Math.max(0, dfs(root.left));
            const right = Math.max(0, dfs(root.right));

            max = Math.max(max, root.val + left + right);
            return root.val + Math.max(left, right);
        };
        dfs(root);
        return max;
    }
}
