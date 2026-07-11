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
        const adjList = {};
        adjList[node.val] = new Node(node.val);

        const q = new Queue();
        q.push(node);
        while (!q.isEmpty()) {
            const cur = q.pop();
            for (const n of cur.neighbors) {
                if (!adjList[n.val]) {
                    adjList[n.val] = new Node(n.val);
                    q.push(n);
                }
                adjList[cur.val].neighbors.push(adjList[n.val]);
            }
        }

        return adjList[node.val];
    }
}
