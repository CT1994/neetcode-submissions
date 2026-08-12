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
        const cloneMap = new Map();
        const dfs = (node) => {
            if (cloneMap.has(node)) return cloneMap.get(node);
            cloneMap.set(node, new Node(node.val));
            for (const n of node.neighbors) {
                dfs(n);
                cloneMap.get(node).neighbors.push(cloneMap.get(n));
            }
            return cloneMap.get(node);
        };
        return dfs(node);
    }
}
