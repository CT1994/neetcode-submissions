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
        const result = [];
        const queue = [];
        
        if (root) {
            queue.push([true, root])
        }

        while (queue.length) {
            let rightSideViewAdded = false;
            const levelLength = queue.length;
            for (let i = 0; i < levelLength; i++) {
                const node = queue.shift();
                if (node[0]) {
                    result.push(node[1].val)
                }
                
                if (node[1].right) {
                    queue.push([!rightSideViewAdded, node[1].right]);
                    rightSideViewAdded = true
                }

                if (node[1].left) {
                    queue.push([!rightSideViewAdded, node[1].left]);
                    rightSideViewAdded = true
                }
            }
        }
        return result
    }
}
