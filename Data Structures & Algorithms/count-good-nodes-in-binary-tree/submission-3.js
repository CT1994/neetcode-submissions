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
    goodNodes(root) {
        let res = 0;
        if (!root) return res;
        const q = new Queue();
        q.push([root, -Infinity]);
        while (!q.isEmpty()) {
            const len = q.size();
            for (let i = 0; i < len; i++) {
                let [node, maxVal] = q.pop();
                if (node.val >= maxVal) {
                    maxVal = node.val;
                    res++;
                }
                if (node.left) q.push([node.left, maxVal]);
                if (node.right) q.push([node.right, maxVal]);
            }
        }
        return res;
    }
}
