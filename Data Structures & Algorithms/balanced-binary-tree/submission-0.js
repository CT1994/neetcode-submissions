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

/**
 * @typedef { [boolean, number] } BalanceResult
 * @property {boolean} 0 - Whether the subtree is height-balanced.
 * @property {number} 1 - The height of the subtree.
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isBalanced(root) {
        return this.dfs(root)[0]
    }

    /**
     * @param {TreeNode} root
     * @return {BalanceResult}
     */
    dfs(root) {
        if (root == null) {
            return [true, 0]
        }

        const left = this.dfs(root.left);
        const right = this.dfs(root.right);
        const balanced = Math.abs(left[1] - right[1]) <= 1;
        const currentHeight = 1 + Math.max(left[1], right[1]);

        return [left[0] && right[0] && balanced, currentHeight];
    }
}
