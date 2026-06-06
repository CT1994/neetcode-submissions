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
                prev = node.val
            }

            dfs(node.left, prev);
            dfs(node.right, prev);
        };

        dfs(root, -Infinity);

        return res;
    }
}
