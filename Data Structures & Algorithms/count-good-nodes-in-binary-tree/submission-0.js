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
    goodNodes(root) {
        let res = 0;
        const dfs = (node, prev) => {
            if (!node) {
                return;
            }

            if (node.val >= prev) {
                res++;
            }

            dfs(node.left, Math.max(node.val, prev));
            dfs(node.right, Math.max(node.val, prev));
        };

        dfs(root, -Infinity);

        return res;
    }
}
