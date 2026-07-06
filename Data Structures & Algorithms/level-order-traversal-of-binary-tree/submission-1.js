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
     * @return {number[][]}
     */
    levelOrder(root) {
        if (!root) return [];
        
        const res = [];
        const q = new Queue();
        q.push(root);

        while (!q.isEmpty()) {
            const level = [];
            const length = q.size();
            for (let i = 0; i < length; i++) {
                const node = q.pop();
                level.push(node.val);
                if (node.left) {
                    q.push(node.left);
                }
                if (node.right) {
                    q.push(node.right);
                }
            }
            res.push(level);
        }

        return res;
    }
}
