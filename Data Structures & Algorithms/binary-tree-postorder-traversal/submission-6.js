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
    postorderTraversal(root) {
        const res = [];
        const stack = [root];
        const visited = [false];
        while (stack.length) {
            const cur = stack.pop();
            const visit = visited.pop();
            if (visit) {
                res.push(cur.val);
            } else if (cur) {
                stack.push(cur);
                visited.push(true);

                stack.push(cur.right);
                visited.push(false);

                stack.push(cur.left);
                visited.push(false);
            }
        }
        return res;
    }
}
