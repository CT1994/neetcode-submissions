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
     * @return {boolean}
     */
    isBalanced(root) {
        const dfs = (root) => {
            if (!root) return [1, true];
            const left = dfs(root.left);
            const right = dfs(root.right);
            const isBalanced = left[1] && right[1] && Math.abs(left[0] - right[0]) <= 1;
            return [1 + Math.max(left[0], right[0]), isBalanced];
        };
        return dfs(root)[1];
    }
}
