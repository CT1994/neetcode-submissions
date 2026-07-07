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
        if (!this.root) {
            this.root = new TreeNode(key, val);
            return;
        }

        this.insertHelper(this.root, key, val);
    }

    insertHelper(root, key, val) {
        if (!root) return new TreeNode(key, val);

        if (key < root.key) {
            root.left = this.insertHelper(root.left, key, val);
        } else if (key > root.key) {
            root.right = this.insertHelper(root.right, key, val);
        }
        else {
            root.val = val
        }

        return root;
    }

    /**
     * @param {number} key
     * @returns {number}
     */
    get(key) {
        return this.getHelper(this.root, key);
    }

    getHelper(root, key) {
        if (!root) return -1;

        if (key < root.key) {
            return this.getHelper(root.left, key);
        } else if (key > root.key) {
            return this.getHelper(root.right, key);
        }

        return root.val;
    }

    /**
     * @returns {number}
     */
    getMin() {
        if (!this.root) return -1;
        let cur = this.root;

        while (cur && cur.left) {
            cur = cur.left;
        }

        return cur.val;
    }

    /**
     * @returns {number}
     */
    getMax() {
        if (!this.root) return -1;
        let cur = this.root;

        while (cur && cur.right) {
            cur = cur.right;
        }

        return cur.val;
    }

    /**
     * @param {number} key
     * @returns {void}
     */
    remove(key) {
        this.root = this.removeHelper(this.root, key);
    }

    removeHelper(root, key) {
        if (!root) return null;

        if (key < root.key) {
            root.left = this.removeHelper(root.left, key);
        } else if (key > root.key) {
            root.right = this.removeHelper(root.right, key);
        } else {
            if (!root.left) {
                return root.right;
            } else if (!root.right) {
                return root.left;
            } else {
                let min = root.right;
                while (min && min.left) {
                    min = min.left;
                }
                root.val = min.val;
                root.key = min.key;
                root.right = this.removeHelper(root.right, min.key);
            }
        }

        return root;
    }

    /**
     * @returns {number[]}
     */
    getInorderKeys() {
        const res = [];

        const dfs = (root) => {
            if (!root) return;

            dfs(root.left);
            res.push(root.key);
            dfs(root.right);
        };

        dfs(this.root);

        return res;
    }
}
