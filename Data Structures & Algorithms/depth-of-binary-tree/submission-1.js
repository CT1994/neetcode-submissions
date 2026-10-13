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
    maxDepth(root) {
        if (!root) return 0;
        let depth = 0;
        let q = new Queue([root]);
        while (!q.isEmpty()) {
            const length = q.size();
            for (let i = 0; i < length; i++) {
                const node = q.pop();
                if (node.left) q.push(node.left);
                if (node.right) q.push(node.right);
            }
            depth++;
        }
        return depth;
    }
}
