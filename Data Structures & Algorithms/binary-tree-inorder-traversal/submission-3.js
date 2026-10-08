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
                const node = stack.pop();
                res.push(node.val);
                cur = node.right;
            }
        }
        return res;
    }
}
