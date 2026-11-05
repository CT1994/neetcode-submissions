/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        if (!node) return null;

        const clone = new Map();
        const dfs = (node) => {
            if (clone.has(node)) return;
            clone.set(node, new Node(node.val));
            for (const n of node.neighbors) {
                dfs(n);
                clone.get(node).neighbors.push(clone.get(n));
            }
        };
        dfs(node);
        return clone.get(node);
    }
}
