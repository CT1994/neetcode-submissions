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
    isValidBST(root) {
        if (!root) return true;
        const stack = [];
        stack.push([root, -Infinity, Infinity]);
        while (stack.length > 0) {
            const [node, left, right] = stack.pop();
            if (left < node.val && node.val < right) {
                if (node.left) {
                    stack.push([node.left, left, node.val]);
                }
                if (node.right) {
                    stack.push([node.right, node.val, right]);
                }
            } else {
                return false;
            }
        }
        return true;
    }
}
