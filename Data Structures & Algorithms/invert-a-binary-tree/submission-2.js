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
        if (!root) return null;

        const q = new Queue([root]);
        while (!q.isEmpty()) {
            const node = q.pop();
            if (node.left) q.push(node.left);
            if (node.right) q.push(node.right);
            [node.left, node.right] = [node.right, node.left];
        }

        return root;
    }
}
