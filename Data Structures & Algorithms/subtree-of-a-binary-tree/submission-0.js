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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        const dfs = (node) => {
            if (!node) {
                return false
            }

            if (this.isSameTree(node, subRoot)) {
                return true
            }

            if (dfs(node.left)) {
                return true
            }
            if (dfs(node.right)) {
                return true
            }

            return false
        }
        return dfs(root);
    }

    isSameTree(p, q) {
        if (!p && !q) {
            return true;
        }

        if (p && q && p.val === q.val) {
            return this.isSameTree(p.left, q.left) && this.isSameTree(p.right, q.right);
        }

        return false;
    }
}
