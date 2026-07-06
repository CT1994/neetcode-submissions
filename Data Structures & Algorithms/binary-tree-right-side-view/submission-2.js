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
        let q = [root];

        while (q.length) {
            res.push(q[0].val);
            const nextQ = [];
            for (let i = 0; i < q.length; i++) {
                const node = q[i];
                if (node.right) nextQ.push(node.right);
                if (node.left) nextQ.push(node.left);
            }
            q = nextQ;
        }

        return res;
    }
}
