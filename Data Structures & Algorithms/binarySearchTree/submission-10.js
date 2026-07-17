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
        this.root = this.insertHelper(this.root, key, val);
    }

    insertHelper(root, key, val) {
        if (!root) {
            return new TreeNode(key, val);
        }

        if (key < root.key) {
            root.left = this.insertHelper(root.left, key, val);
        } else if (key > root.key) {
            root.right = this.insertHelper(root.right, key, val);
        } else {
            root.val = val;
        }

        return root;
    }

    /**
     * @param {number} key
     * @returns {number}
     */
    get(key) {
        let cur = this.root;

        while (cur) {
            if (key === cur.key) {
                return cur.val;
            } else if (key < cur.key) {
                cur = cur.left;
            } else {
                cur = cur.right;
            }
        }

        return -1;
    }

    /**
     * @returns {number}
     */
    getMin() {
        let cur = this.root;
        if (!cur) {
            return -1;
        }

        while (cur && cur.left) {
            cur = cur.left;
        }
        return cur.val;
    }

    /**
     * @returns {number}
     */
    getMax() {
        let cur = this.root;
        if (!cur) {
            return -1;
        }

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
        if (!root) {
            return null;
        }

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

                root.key = min.key;
                root.val = min.val;
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
