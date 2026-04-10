class TreeNode {
    constructor(key, val) {
        this.key = key;
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class TreeMap {
    constructor() {
        this.root = null;
    }

    /**
     * @param {number} key
     * @param {number} val
     * @returns {void}
     */
    insert(key, val) {
        const treeNode = new TreeNode(key, val);
        if (!this.root) {
            this.root = treeNode;
            return;
        }
        
        let curr = this.root;
            while (true) {
                if (key < curr.key) {
                    if (curr.left === null) {
                        curr.left = treeNode;
                        break;
                    }
                    curr = curr.left
                }
                else if (key > curr.key) {
                    if (curr.right === null) {
                        curr.right = treeNode;
                        break;
                    }
                    curr = curr.right
                }
                else {
                    curr.val = val;
                    break
                }
            }
    }

    /**
     * @param {number} key
     * @returns {number}
     */
    get(key) {
        let curr = this.root;

        while (curr) {
            if (key < curr.key) {
                curr = curr.left
            }
            else if (key > curr.key) {
                curr = curr.right;
            }
            else {
                return curr.val
            }
        }

        return -1;
    }

    /**
     * @returns {number}
     */
    getMin() {
        if (!this.root) {
            return -1;
        }

        let curr = this.root;

        while (curr && curr.left) {
            curr = curr.left;
        }

        return curr.val
    }

    /**
     * @returns {number}
     */
    getMax() {
        if (!this.root) {
            return -1;
        }
        
        let curr = this.root;

        while (curr && curr.right) {
            curr = curr.right;
        }

        return curr.val
    }

    /**
     * @param {number} key
     * @returns {void}
     */
    remove(key) {
        let curr = this.root;
        let parent = null;

        // Phase 1: Find the node and its parent
        while (curr && curr.key !== key) {
            parent = curr;
            if (key < curr.key) {
                curr = curr.left;
            } else {
                curr = curr.right;
            }
        }

        if (!curr) return; // Key not found

        // Phase 2: Handle nodes with 2 children
        if (curr.left && curr.right) {
            // Find the Inorder Successor (min in right subtree)
            let successorParent = curr;
            let successor = curr.right;
            while (successor.left) {
                successorParent = successor;
                successor = successor.left;
            }

            // Copy successor's data to current node
            curr.key = successor.key;
            curr.val = successor.val;

            // Now we prep to delete the successor node instead
            // The successor is now our "curr" to be deleted
            parent = successorParent;
            curr = successor;
        }

        // Phase 3: Delete node with 0 or 1 child
        // (This also handles the successor deletion from Phase 2)
        let child = curr.left ? curr.left : curr.right;

        if (!parent) {
            this.root = child; // Removing the root node
        } else if (parent.left === curr) {
            parent.left = child;
        } else {
            parent.right = child;
        }
    }

    /**
     * @returns {number[]}
     */
    getInorderKeys() {
        const result = [];
        
        const dfs = (root) => {
            if (root === null) {
                return;
            }

            dfs(root.left);
            result.push(root.key)
            dfs(root.right);
        }

        dfs(this.root)

        return result
    }
}
