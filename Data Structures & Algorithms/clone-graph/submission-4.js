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
        const map = {};

        const dfs = (node) => {
            if (map[node.val]) return;

            map[node.val] = new Node(node.val)
            for (const n of node.neighbors) {
                dfs(n)
                map[node.val].neighbors.push(map[n.val])
            }
        }
        dfs(node);
        return map[node.val];
    }
}
