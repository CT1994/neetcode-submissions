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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {
        if (preorder.length === 0 || inorder.length === 0) return null;
        const idx = inorder.indexOf(preorder[0]);
        const root = new TreeNode(preorder[0]);
        root.left = this.buildTree(preorder.slice(1), inorder.slice(0, idx));
        root.right = this.buildTree(preorder.slice(idx + 1), inorder.slice(idx + 1));
        return root;
    }
}
