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
     * @return {TreeNode}
     */
    invertTree(root) {
        const dfs = (root) => {
            if (!root) return;
            [root.left, root.right] = [root.right, root.left];
            dfs(root.left);
            dfs(root.right);
        };

        dfs(root);
        return root;
    }
}
