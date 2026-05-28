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
        if (root === null) {
            return 0;
        }

        let res = 0;
        const queue = new Queue();
        queue.enqueue(root);

        while (queue.size()) {
            const size = queue.size();
            for (let i = 0; i < size; i++) {
                const node = queue.dequeue();
                if (node.left) {
                    queue.enqueue(node.left);
                }
                if (node.right) {
                    queue.enqueue(node.right);
                }
            }

            res++;
        }

        return res;
    }
}
