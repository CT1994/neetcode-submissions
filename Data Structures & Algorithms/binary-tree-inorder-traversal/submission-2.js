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
    inorderTraversal(root) {
        const res = [];
        let cur = root;
        let stack = [];

        while (cur || stack.length) {
            if (cur) {
                stack.push(cur);
                cur = cur.left;
            } else {
                cur = stack.pop();
                res.push(cur.val);
                cur = cur.right;
            }
        }

        return res;
    }
}
