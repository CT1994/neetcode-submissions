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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        const nums = [];

        const dfs = (root) => {
            if (!root) return;

            if (root.left) dfs(root.left);
            nums.push(root.val);
            if (root.right) dfs(root.right);
        };

        dfs(root);

        return nums[k - 1];
    }
}
