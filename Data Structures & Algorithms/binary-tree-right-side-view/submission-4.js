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
        // Base case: If the tree is empty, return an empty array
        if (!root) return [];

        const res = [];
        const q = new Queue();
        q.push(root);

        // Standard Level-Order Traversal (BFS)
        while (!q.isEmpty()) {
            const length = q.size();

            // CRUCIAL TRICK: Because we push the right child into the queue BEFORE the left
            // child, the first element at any given level will always be the rightmost node.
            res.push(q.front().val);

            // Process all nodes currently in the current level
            for (let i = 0; i < length; i++) {
                const node = q.pop();

                // Order matters here! Push right child first, then left child,
                // so that the next level also places the rightmost node at the front of the queue.
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
