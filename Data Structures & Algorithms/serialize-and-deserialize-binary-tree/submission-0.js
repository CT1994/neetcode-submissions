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

class Codec {
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    serialize(root) {
        const arr = []
        const dfs = (node) => {
            if (!node) {
                arr.push("N")
                return
            }

            arr.push(node.val.toString())
            dfs(node.left)
            dfs(node.right)
        }

        dfs(root)

        return arr.join(",")
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        const arr = data.split(',')
        let i = 0
        const dfs = () => {
            if (arr[i] === "N") {
                i++
                return null;
            }

            const node = new TreeNode(arr[i])
            i++
            node.left = dfs()
            node.right = dfs()

            return node
        }

        return dfs()
    }
}
