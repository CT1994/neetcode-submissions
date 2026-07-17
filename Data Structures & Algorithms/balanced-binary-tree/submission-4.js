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
            if (!root) {
                return [true, 1];
            }

            const left = dfs(root.left);
            const right = dfs(root.right);
            return [
                left[0] && right[0] && Math.abs(right[1] - left[1]) <= 1,
                1 + Math.max(left[1], right[1]),
            ];
        };

        return dfs(root)[0];
    }
}
