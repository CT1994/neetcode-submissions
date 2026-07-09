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
     * @return {number[]}
     */
    rightSideView(root) {
        if (!root) return [];

        const res = [];
        const q = new Queue();
        q.push(root);
        while (!q.isEmpty()) {
            const length = q.size();
            res.push(q.front().val);
            for (let i = 0; i < length; i++) {
                const node = q.pop();
                if (node.right) {
                    q.push(node.right);
                }
                if (node.left) {
                    q.push(node.left);
                }
            }
        }

        return res;
    }
}
